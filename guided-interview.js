var h = Object.defineProperty;
var l = (n, t, e) => t in n ? h(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var o = (n, t, e) => (l(n, typeof t != "symbol" ? t + "" : t, e), e);
const w = () => "id-" + (Math.random() + 1).toString(36).substring(7), c = class {
  constructor() {
    o(this, "subscribers");
    this.subscribers = {};
  }
  dispatch(t, e) {
    const i = this.subscribers[t];
    i !== void 0 && Object.keys(i).forEach((r) => i[r](e));
  }
  register(t, e) {
    const i = this.getNextId();
    return this.subscribers[t] || (this.subscribers[t] = {}), this.subscribers[t][i] = e, {
      unregister: () => {
        delete this.subscribers[t][i], Object.keys(this.subscribers[t]).length === 0 && delete this.subscribers[t];
      }
    };
  }
  getNextId() {
    return c.nextId++;
  }
};
let u = c;
o(u, "nextId", 0);
const a = {
  text: !0,
  multipleChoice: !0,
  number: !0
};
class d {
  constructor(t) {
    o(this, "interview", /* @__PURE__ */ new Map());
    o(this, "events", new u());
    o(this, "current");
    t && this.init(t);
  }
  get questionsMap() {
    return this.interview;
  }
  init(t) {
    for (const e of Object.values(t))
      this.add(e);
  }
  add(t, e = !1) {
    if (!a[t.type])
      throw new Error("Invalid question type");
    const i = t.id || w(), r = {
      id: i,
      type: t.type,
      subType: t.subType || "",
      title: t.title || "",
      required: Boolean(t.required),
      indications: t.indications || "",
      value: t.value || "",
      logic: t.logic || {}
    };
    return this.interview.set(i, r), this.events.dispatch("question-added", r), r;
  }
  canBeShown(t) {
    var e;
    if ((e = t.logic) != null && e.showIf) {
      const i = this.interview.keys(), r = this.interview.values();
      return Function(...i, `return ${t.logic.showIf}`).bind(this)(...r);
    }
    return !0;
  }
  setCurrent(t) {
    if (!this.interview.has(t))
      throw new Error("No question with id:" + t);
    this.current = t, this.events.dispatch("set-current", this.getCurrent());
  }
  next() {
    const t = this.getCurrent().id, e = Array.from(this.interview);
    for (let i = 0; i < e.length; i++) {
      const [r] = e[i];
      if (t === r) {
        const s = this.nextAvailableQuestion(i + 1);
        s && this.setCurrent(s[0]);
        break;
      }
    }
  }
  nextAvailableQuestion(t) {
    const e = Array.from(this.interview);
    for (let i = t; i < e.length; i++) {
      const [r, s] = e[i];
      if (this.canBeShown(s))
        return e[i];
    }
  }
  previous() {
    const t = this.getCurrent().id, e = Array.from(this.interview);
    for (let i = 0; i < e.length; i++) {
      const [r] = e[i];
      if (t === r) {
        const s = this.previousAvailableQuestion(i - 1);
        s && this.setCurrent(s[0]);
        break;
      }
    }
  }
  previousAvailableQuestion(t) {
    const e = Array.from(this.interview);
    for (let i = t; i >= 0; i--) {
      const [r, s] = e[i];
      if (this.canBeShown(s))
        return e[i];
    }
  }
  getCurrent() {
    this.current || (this.current = Array.from(this.interview)[0][0]);
    const t = this.interview.get(this.current);
    if (!t)
      throw new Error("Could not find current Quetion");
    return t;
  }
  setValue(t, e) {
    if (!this.interview.has(t))
      throw new Error("No question with id:" + t);
    this.interview.get(t).value = e, this.events.dispatch("set-value", this.interview.get(t));
  }
  on(t, e) {
    this.events.register(t, e);
  }
}
export {
  d as GuidedInterview
};
