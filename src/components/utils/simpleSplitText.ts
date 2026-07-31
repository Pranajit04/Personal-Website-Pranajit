export class SimpleSplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  elements: HTMLElement[] = [];
  private originalContent: Map<HTMLElement, string> = new Map();

  constructor(
    target: string | HTMLElement | (string | HTMLElement)[],
    options?: { type?: string; linesClass?: string }
  ) {
    let elems: HTMLElement[] = [];
    if (typeof target === "string") {
      elems = Array.from(document.querySelectorAll(target));
    } else if (Array.isArray(target)) {
      target.forEach((t) => {
        if (typeof t === "string") {
          elems.push(...Array.from(document.querySelectorAll<HTMLElement>(t)));
        } else if (t instanceof HTMLElement) {
          elems.push(t);
        }
      });
    } else if (target instanceof HTMLElement) {
      elems = [target];
    }

    this.elements = elems;

    elems.forEach((el) => {
      if (!this.originalContent.has(el)) {
        this.originalContent.set(el, el.innerHTML);
      }
      const text = el.textContent || "";
      el.innerHTML = "";
      const wordsList = text.split(/\s+/);
      wordsList.forEach((wordText, wIdx) => {
        if (!wordText) return;
        const wordSpan = document.createElement("span");
        wordSpan.className = options?.linesClass || "split-word";
        wordSpan.style.display = "inline-block";

        for (let i = 0; i < wordText.length; i++) {
          const charSpan = document.createElement("span");
          charSpan.className = "split-char";
          charSpan.style.display = "inline-block";
          charSpan.textContent = wordText[i];
          wordSpan.appendChild(charSpan);
          this.chars.push(charSpan);
        }

        el.appendChild(wordSpan);
        this.words.push(wordSpan);

        if (wIdx < wordsList.length - 1) {
          const space = document.createTextNode(" ");
          el.appendChild(space);
        }
      });
    });
  }

  revert() {
    this.elements.forEach((el) => {
      const orig = this.originalContent.get(el);
      if (orig !== undefined) {
        el.innerHTML = orig;
      }
    });
  }
}
