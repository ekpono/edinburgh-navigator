var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented, "notImplemented");
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
__name(notImplementedClass, "notImplementedClass");

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
var nodeTiming = {
  name: "node",
  entryType: "node",
  startTime: 0,
  duration: 0,
  nodeStart: 0,
  v8Start: 0,
  bootstrapComplete: 0,
  environment: 0,
  loopStart: 0,
  loopExit: 0,
  idleTime: 0,
  uvMetricsInfo: {
    loopCount: 0,
    events: 0,
    eventsWaiting: 0
  },
  detail: void 0,
  toJSON() {
    return this;
  }
};
var PerformanceEntry = class {
  static {
    __name(this, "PerformanceEntry");
  }
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
var PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
  static {
    __name(this, "PerformanceMark");
  }
  entryType = "mark";
  constructor() {
    super(...arguments);
  }
  get duration() {
    return 0;
  }
};
var PerformanceMeasure = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceMeasure");
  }
  entryType = "measure";
};
var PerformanceResourceTiming = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceResourceTiming");
  }
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
var PerformanceObserverEntryList = class {
  static {
    __name(this, "PerformanceObserverEntryList");
  }
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
var Performance = class {
  static {
    __name(this, "Performance");
  }
  __unenv__ = true;
  timeOrigin = _timeOrigin;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  timerify(_fn, _options) {
    throw createNotImplementedError("Performance.timerify");
  }
  get nodeTiming() {
    return nodeTiming;
  }
  eventLoopUtilization() {
    return {};
  }
  markResourceTiming() {
    return new PerformanceResourceTiming("");
  }
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin) {
      return _performanceNow();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e) => e.entryType === type);
  }
  mark(name, options) {
    const entry = new PerformanceMark(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new PerformanceMeasure(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  addEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw createNotImplementedError("Performance.dispatchEvent");
  }
  toJSON() {
    return this;
  }
};
var PerformanceObserver = class {
  static {
    __name(this, "PerformanceObserver");
  }
  __unenv__ = true;
  static supportedEntryTypes = [];
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw createNotImplementedError("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw createNotImplementedError("PerformanceObserver.observe");
  }
  bind(fn) {
    return fn;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  emitDestroy() {
    return this;
  }
};
var performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
if (!("__unenv__" in performance)) {
  const proto = Performance.prototype;
  for (const key of Object.getOwnPropertyNames(proto)) {
    if (key !== "constructor" && !(key in performance)) {
      const desc = Object.getOwnPropertyDescriptor(proto, key);
      if (desc) {
        Object.defineProperty(performance, key, desc);
      }
    }
  }
}
globalThis.performance = performance;
globalThis.Performance = Performance;
globalThis.PerformanceEntry = PerformanceEntry;
globalThis.PerformanceMark = PerformanceMark;
globalThis.PerformanceMeasure = PerformanceMeasure;
globalThis.PerformanceObserver = PerformanceObserver;
globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
globalThis.PerformanceResourceTiming = PerformanceResourceTiming;

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default = Object.assign(() => {
}, { __unenv__: true });

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/console.mjs
var _console = globalThis.console;
var _ignoreErrors = true;
var _stderr = new Writable();
var _stdout = new Writable();
var log = _console?.log ?? noop_default;
var info = _console?.info ?? log;
var trace = _console?.trace ?? info;
var debug = _console?.debug ?? log;
var table = _console?.table ?? log;
var error = _console?.error ?? log;
var warn = _console?.warn ?? error;
var createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
var clear = _console?.clear ?? noop_default;
var count = _console?.count ?? noop_default;
var countReset = _console?.countReset ?? noop_default;
var dir = _console?.dir ?? noop_default;
var dirxml = _console?.dirxml ?? noop_default;
var group = _console?.group ?? noop_default;
var groupEnd = _console?.groupEnd ?? noop_default;
var groupCollapsed = _console?.groupCollapsed ?? noop_default;
var profile = _console?.profile ?? noop_default;
var profileEnd = _console?.profileEnd ?? noop_default;
var time = _console?.time ?? noop_default;
var timeEnd = _console?.timeEnd ?? noop_default;
var timeLog = _console?.timeLog ?? noop_default;
var timeStamp = _console?.timeStamp ?? noop_default;
var Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
var _times = /* @__PURE__ */ new Map();
var _stdoutErrorHandler = noop_default;
var _stderrErrorHandler = noop_default;

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole = globalThis["console"];
var {
  assert,
  clear: clear2,
  // @ts-expect-error undocumented public API
  context,
  count: count2,
  countReset: countReset2,
  // @ts-expect-error undocumented public API
  createTask: createTask2,
  debug: debug2,
  dir: dir2,
  dirxml: dirxml2,
  error: error2,
  group: group2,
  groupCollapsed: groupCollapsed2,
  groupEnd: groupEnd2,
  info: info2,
  log: log2,
  profile: profile2,
  profileEnd: profileEnd2,
  table: table2,
  time: time2,
  timeEnd: timeEnd2,
  timeLog: timeLog2,
  timeStamp: timeStamp2,
  trace: trace2,
  warn: warn2
} = workerdConsole;
Object.assign(workerdConsole, {
  Console,
  _ignoreErrors,
  _stderr,
  _stderrErrorHandler,
  _stdout,
  _stdoutErrorHandler,
  _times
});
var console_default = workerdConsole;

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
globalThis.console = console_default;

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
  const now = Date.now();
  const seconds = Math.trunc(now / 1e3);
  const nanos = now % 1e3 * 1e6;
  if (startTime) {
    let diffSeconds = seconds - startTime[0];
    let diffNanos = nanos - startTime[0];
    if (diffNanos < 0) {
      diffSeconds = diffSeconds - 1;
      diffNanos = 1e9 + diffNanos;
    }
    return [diffSeconds, diffNanos];
  }
  return [seconds, nanos];
}, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
  return BigInt(Date.now() * 1e6);
}, "bigint") });

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream = class {
  static {
    __name(this, "ReadStream");
  }
  fd;
  isRaw = false;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  setRawMode(mode) {
    this.isRaw = mode;
    return this;
  }
};

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream = class {
  static {
    __name(this, "WriteStream");
  }
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  clearLine(dir3, callback) {
    callback && callback();
    return false;
  }
  clearScreenDown(callback) {
    callback && callback();
    return false;
  }
  cursorTo(x2, y, callback) {
    callback && typeof callback === "function" && callback();
    return false;
  }
  moveCursor(dx, dy, callback) {
    callback && callback();
    return false;
  }
  getColorDepth(env2) {
    return 1;
  }
  hasColors(count3, env2) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(str, encoding, cb) {
    if (str instanceof Uint8Array) {
      str = new TextDecoder().decode(str);
    }
    try {
      console.log(str);
    } catch {
    }
    cb && typeof cb === "function" && cb();
    return false;
  }
};

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION = "22.14.0";

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
var Process = class _Process extends EventEmitter {
  static {
    __name(this, "Process");
  }
  env;
  hrtime;
  nextTick;
  constructor(impl) {
    super();
    this.env = impl.env;
    this.hrtime = impl.hrtime;
    this.nextTick = impl.nextTick;
    for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
      const value = this[prop];
      if (typeof value === "function") {
        this[prop] = value.bind(this);
      }
    }
  }
  // --- event emitter ---
  emitWarning(warning, type, code) {
    console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
  }
  emit(...args) {
    return super.emit(...args);
  }
  listeners(eventName) {
    return super.listeners(eventName);
  }
  // --- stdio (lazy initializers) ---
  #stdin;
  #stdout;
  #stderr;
  get stdin() {
    return this.#stdin ??= new ReadStream(0);
  }
  get stdout() {
    return this.#stdout ??= new WriteStream(1);
  }
  get stderr() {
    return this.#stderr ??= new WriteStream(2);
  }
  // --- cwd ---
  #cwd = "/";
  chdir(cwd2) {
    this.#cwd = cwd2;
  }
  cwd() {
    return this.#cwd;
  }
  // --- dummy props and getters ---
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return `v${NODE_VERSION}`;
  }
  get versions() {
    return { node: NODE_VERSION };
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  // --- noop methods ---
  ref() {
  }
  unref() {
  }
  // --- unimplemented methods ---
  umask() {
    throw createNotImplementedError("process.umask");
  }
  getBuiltinModule() {
    return void 0;
  }
  getActiveResourcesInfo() {
    throw createNotImplementedError("process.getActiveResourcesInfo");
  }
  exit() {
    throw createNotImplementedError("process.exit");
  }
  reallyExit() {
    throw createNotImplementedError("process.reallyExit");
  }
  kill() {
    throw createNotImplementedError("process.kill");
  }
  abort() {
    throw createNotImplementedError("process.abort");
  }
  dlopen() {
    throw createNotImplementedError("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw createNotImplementedError("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw createNotImplementedError("process.loadEnvFile");
  }
  disconnect() {
    throw createNotImplementedError("process.disconnect");
  }
  cpuUsage() {
    throw createNotImplementedError("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw createNotImplementedError("process.initgroups");
  }
  openStdin() {
    throw createNotImplementedError("process.openStdin");
  }
  assert() {
    throw createNotImplementedError("process.assert");
  }
  binding() {
    throw createNotImplementedError("process.binding");
  }
  // --- attached interfaces ---
  permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
  report = {
    directory: "",
    filename: "",
    signal: "SIGUSR2",
    compact: false,
    reportOnFatalError: false,
    reportOnSignal: false,
    reportOnUncaughtException: false,
    getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
    writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
  };
  finalization = {
    register: /* @__PURE__ */ notImplemented("process.finalization.register"),
    unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
    registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
  };
  memoryUsage = Object.assign(() => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
  // --- undefined props ---
  mainModule = void 0;
  domain = void 0;
  // optional
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  // internals
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess = globalThis["process"];
var getBuiltinModule = globalProcess.getBuiltinModule;
var workerdProcess = getBuiltinModule("node:process");
var unenvProcess = new Process({
  env: globalProcess.env,
  hrtime,
  // `nextTick` is available from workerd process v1
  nextTick: workerdProcess.nextTick
});
var { exit, features, platform } = workerdProcess;
var {
  _channel,
  _debugEnd,
  _debugProcess,
  _disconnect,
  _events,
  _eventsCount,
  _exiting,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _handleQueue,
  _kill,
  _linkedBinding,
  _maxListeners,
  _pendingMessage,
  _preload_modules,
  _rawDebug,
  _send,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  arch,
  argv,
  argv0,
  assert: assert2,
  availableMemory,
  binding,
  channel,
  chdir,
  config,
  connected,
  constrainedMemory,
  cpuUsage,
  cwd,
  debugPort,
  disconnect,
  dlopen,
  domain,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exitCode,
  finalization,
  getActiveResourcesInfo,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getMaxListeners,
  getuid,
  hasUncaughtExceptionCaptureCallback,
  hrtime: hrtime3,
  initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  mainModule,
  memoryUsage,
  moduleLoadList,
  nextTick,
  off,
  on,
  once,
  openStdin,
  permission,
  pid,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  reallyExit,
  ref,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  send,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setMaxListeners,
  setSourceMapsEnabled,
  setuid,
  setUncaughtExceptionCaptureCallback,
  sourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  throwDeprecation,
  title,
  traceDeprecation,
  umask,
  unref,
  uptime,
  version,
  versions
} = unenvProcess;
var _process = {
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  hasUncaughtExceptionCaptureCallback,
  setUncaughtExceptionCaptureCallback,
  loadEnvFile,
  sourceMapsEnabled,
  arch,
  argv,
  argv0,
  chdir,
  config,
  connected,
  constrainedMemory,
  availableMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  disconnect,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exit,
  finalization,
  features,
  getBuiltinModule,
  getActiveResourcesInfo,
  getMaxListeners,
  hrtime: hrtime3,
  kill,
  listeners,
  listenerCount,
  memoryUsage,
  nextTick,
  on,
  off,
  once,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  throwDeprecation,
  traceDeprecation,
  umask,
  uptime,
  version,
  versions,
  // @ts-expect-error old API
  domain,
  initgroups,
  moduleLoadList,
  reallyExit,
  openStdin,
  assert: assert2,
  binding,
  send,
  exitCode,
  channel,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  permission,
  mainModule,
  _events,
  _eventsCount,
  _exiting,
  _maxListeners,
  _debugEnd,
  _debugProcess,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  _disconnect,
  _handleQueue,
  _pendingMessage,
  _channel,
  _send,
  _linkedBinding
};
var process_default = _process;

// ../../../../../../.nvm/versions/node/v20.19.4/lib/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
globalThis.process = process_default;

// _worker.js/index.js
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ALSes_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  const requestContextAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: /* @__PURE__ */ __name(() => Reflect.ownKeys(envAsyncLocalStorage.getStore()), "ownKeys"),
        getOwnPropertyDescriptor: /* @__PURE__ */ __name((_2, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args), "getOwnPropertyDescriptor"),
        get: /* @__PURE__ */ __name((_2, property) => Reflect.get(envAsyncLocalStorage.getStore(), property), "get"),
        set: /* @__PURE__ */ __name((_2, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value), "set")
      }
    )
  };
  globalThis[/* @__PURE__ */ Symbol.for("__cloudflare-request-context__")] = new Proxy(
    {},
    {
      ownKeys: /* @__PURE__ */ __name(() => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()), "ownKeys"),
      getOwnPropertyDescriptor: /* @__PURE__ */ __name((_2, ...args) => Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args), "getOwnPropertyDescriptor"),
      get: /* @__PURE__ */ __name((_2, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property), "get"),
      set: /* @__PURE__ */ __name((_2, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value), "set")
    }
  );
  return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
}).catch(() => null);
var oe = Object.create;
var H = Object.defineProperty;
var se = Object.getOwnPropertyDescriptor;
var ae = Object.getOwnPropertyNames;
var ne = Object.getPrototypeOf;
var ie = Object.prototype.hasOwnProperty;
var E = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "E");
var U = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "U");
var he = /* @__PURE__ */ __name((e, t, o, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let a of ae(t)) !ie.call(e, a) && a !== o && H(e, a, { get: /* @__PURE__ */ __name(() => t[a], "get"), enumerable: !(r = se(t, a)) || r.enumerable });
  return e;
}, "he");
var V = /* @__PURE__ */ __name((e, t, o) => (o = e != null ? oe(ne(e)) : {}, he(t || !e || !e.__esModule ? H(o, "default", { value: e, enumerable: true }) : o, e)), "V");
var g;
var u = E(() => {
  g = { collectedLocales: [] };
});
var p;
var c = E(() => {
  p = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^/?$", has: [{ type: "header", key: "rsc", value: "1" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc", value: "1" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" }, continue: true, override: true }], filesystem: [{ src: "^/index(\\.action|\\.rsc)$", dest: "/", continue: true }, { src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true }, { src: "^/\\.prefetch\\.rsc$", dest: "/__index.prefetch.rsc", check: true }, { src: "^/(.+)/\\.prefetch\\.rsc$", dest: "/$1.prefetch.rsc", check: true }, { src: "^/\\.rsc$", dest: "/index.rsc", check: true }, { src: "^/(.+)/\\.rsc$", dest: "/$1.rsc", check: true }], miss: [{ src: "^/_next/static/.+$", status: 404, check: true, dest: "/_next/static/not-found.txt", headers: { "content-type": "text/plain; charset=utf-8" } }], rewrite: [{ src: "^/_next/data/(.*)$", dest: "/404", status: 404 }, { src: "^/neighbourhoods/(?<nxtPslug>[^/]+?)(?:\\.rsc)(?:/)?$", dest: "/neighbourhoods/[slug].rsc?nxtPslug=$nxtPslug" }, { src: "^/neighbourhoods/(?<nxtPslug>[^/]+?)(?:/)?$", dest: "/neighbourhoods/[slug]?nxtPslug=$nxtPslug" }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|Tj7Va0KW8\\-FoKJDTEe_LP)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index(?:/)?$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*?)(?:/)?$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/404", status: 404 }, { src: "^/.*$", dest: "/500", status: 500 }] }, images: { domains: [], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "attachment" }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "404.rsc.json": { path: "404.rsc", contentType: "application/json" }, "_next/static/not-found.txt": { contentType: "text/plain" } }, framework: { version: "15.4.11" }, crons: [] };
});
var x;
var _ = E(() => {
  x = { "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.rsc.json": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/The_Renters__Rights_Act_Information_Sheet_2026.pdf": { type: "static" }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/Tj7Va0KW8-FoKJDTEe_LP/_buildManifest.js": { type: "static" }, "/_next/static/Tj7Va0KW8-FoKJDTEe_LP/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/306-de8e7b7d08d09f68.js": { type: "static" }, "/_next/static/chunks/4bd1b696-cf72ae8a39fa05aa.js": { type: "static" }, "/_next/static/chunks/874-437a265a67d6cfee.js": { type: "static" }, "/_next/static/chunks/885.64bcc7d12ee62e08.js": { type: "static" }, "/_next/static/chunks/964-9e7fd12428968086.js": { type: "static" }, "/_next/static/chunks/app/_not-found/page-c7f588e55f7b94be.js": { type: "static" }, "/_next/static/chunks/app/api/chat/route-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/api/news/route-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/budget/layout-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/budget/page-5ddb4f9e049217f1.js": { type: "static" }, "/_next/static/chunks/app/community/layout-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/community/page-83e3d5d774abf018.js": { type: "static" }, "/_next/static/chunks/app/crisis/layout-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/crisis/page-163c49f17316f792.js": { type: "static" }, "/_next/static/chunks/app/employment/layout-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/employment/page-185b4d81f1f869e4.js": { type: "static" }, "/_next/static/chunks/app/environment/layout-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/environment/page-00b50a60918708b8.js": { type: "static" }, "/_next/static/chunks/app/faqs/layout-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/faqs/page-b881e87495580982.js": { type: "static" }, "/_next/static/chunks/app/health/layout-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/health/page-5ad4182aba240c6e.js": { type: "static" }, "/_next/static/chunks/app/housing/layout-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/housing/page-1b5affe98b26a9b6.js": { type: "static" }, "/_next/static/chunks/app/layout-5cae7ab725718aa4.js": { type: "static" }, "/_next/static/chunks/app/neighbourhoods/[slug]/page-1d12b8309c063375.js": { type: "static" }, "/_next/static/chunks/app/neighbourhoods/layout-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/neighbourhoods/page-1198c81a25678e69.js": { type: "static" }, "/_next/static/chunks/app/opengraph-image/route-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/page-6d2b950d8e05198f.js": { type: "static" }, "/_next/static/chunks/app/resident/page-1a7aa6f84d3431c8.js": { type: "static" }, "/_next/static/chunks/app/robots.txt/route-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/sitemap.xml/route-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/transport/layout-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/transport/page-1f00c43fed6b61a7.js": { type: "static" }, "/_next/static/chunks/app/visitor/layout-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/visitor/page-da45b4a01f32d77f.js": { type: "static" }, "/_next/static/chunks/app/visitor-essentials/page-433873df7004ec43.js": { type: "static" }, "/_next/static/chunks/app/youth/layout-e3d2913d89e97126.js": { type: "static" }, "/_next/static/chunks/app/youth/page-cec2f7b2d62bda25.js": { type: "static" }, "/_next/static/chunks/framework-16b358206d63ec5d.js": { type: "static" }, "/_next/static/chunks/main-9f5c9f563f0f14b6.js": { type: "static" }, "/_next/static/chunks/main-app-89e751a61725a495.js": { type: "static" }, "/_next/static/chunks/pages/_app-0a0020ddd67f79cf.js": { type: "static" }, "/_next/static/chunks/pages/_error-03529f2c21436739.js": { type: "static" }, "/_next/static/chunks/polyfills-42372ed130431b0a.js": { type: "static" }, "/_next/static/chunks/webpack-1e64e7b8d47a78f1.js": { type: "static" }, "/_next/static/css/6541b4c286cfa938.css": { type: "static" }, "/_next/static/media/4cf2300e9c8272f7-s.p.woff2": { type: "static" }, "/_next/static/media/747892c23ea88013-s.woff2": { type: "static" }, "/_next/static/media/8d697b304b401681-s.woff2": { type: "static" }, "/_next/static/media/93f479601ee12b01-s.p.woff2": { type: "static" }, "/_next/static/media/9610d9e46709d722-s.woff2": { type: "static" }, "/_next/static/media/ba015fad6dcf6784-s.woff2": { type: "static" }, "/_next/static/not-found.txt": { type: "static" }, "/favicon.png": { type: "static" }, "/file.svg": { type: "static" }, "/globe.svg": { type: "static" }, "/next.svg": { type: "static" }, "/vercel.svg": { type: "static" }, "/window.svg": { type: "static" }, "/api/chat": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/chat.func.js" }, "/api/chat.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/chat.func.js" }, "/api/news": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/news.func.js" }, "/api/news.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/news.func.js" }, "/opengraph-image": { type: "function", entrypoint: "__next-on-pages-dist__/functions/opengraph-image.func.js" }, "/opengraph-image.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/opengraph-image.func.js" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/404.rsc": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/budget.html": { type: "override", path: "/budget.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/budget/layout,_N_T_/budget/page,_N_T_/budget", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/budget": { type: "override", path: "/budget.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/budget/layout,_N_T_/budget/page,_N_T_/budget", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/budget.rsc": { type: "override", path: "/budget.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/budget/layout,_N_T_/budget/page,_N_T_/budget", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/community.html": { type: "override", path: "/community.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/community/layout,_N_T_/community/page,_N_T_/community", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/community": { type: "override", path: "/community.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/community/layout,_N_T_/community/page,_N_T_/community", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/community.rsc": { type: "override", path: "/community.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/community/layout,_N_T_/community/page,_N_T_/community", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/crisis.html": { type: "override", path: "/crisis.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/crisis/layout,_N_T_/crisis/page,_N_T_/crisis", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/crisis": { type: "override", path: "/crisis.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/crisis/layout,_N_T_/crisis/page,_N_T_/crisis", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/crisis.rsc": { type: "override", path: "/crisis.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/crisis/layout,_N_T_/crisis/page,_N_T_/crisis", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/employment.html": { type: "override", path: "/employment.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/employment/layout,_N_T_/employment/page,_N_T_/employment", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/employment": { type: "override", path: "/employment.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/employment/layout,_N_T_/employment/page,_N_T_/employment", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/employment.rsc": { type: "override", path: "/employment.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/employment/layout,_N_T_/employment/page,_N_T_/employment", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/environment.html": { type: "override", path: "/environment.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/environment/layout,_N_T_/environment/page,_N_T_/environment", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/environment": { type: "override", path: "/environment.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/environment/layout,_N_T_/environment/page,_N_T_/environment", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/environment.rsc": { type: "override", path: "/environment.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/environment/layout,_N_T_/environment/page,_N_T_/environment", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/faqs.html": { type: "override", path: "/faqs.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/faqs/layout,_N_T_/faqs/page,_N_T_/faqs", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/faqs": { type: "override", path: "/faqs.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/faqs/layout,_N_T_/faqs/page,_N_T_/faqs", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/faqs.rsc": { type: "override", path: "/faqs.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/faqs/layout,_N_T_/faqs/page,_N_T_/faqs", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/health.html": { type: "override", path: "/health.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/health/layout,_N_T_/health/page,_N_T_/health", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/health": { type: "override", path: "/health.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/health/layout,_N_T_/health/page,_N_T_/health", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/health.rsc": { type: "override", path: "/health.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/health/layout,_N_T_/health/page,_N_T_/health", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/housing.html": { type: "override", path: "/housing.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/housing/layout,_N_T_/housing/page,_N_T_/housing", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/housing": { type: "override", path: "/housing.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/housing/layout,_N_T_/housing/page,_N_T_/housing", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/housing.rsc": { type: "override", path: "/housing.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/housing/layout,_N_T_/housing/page,_N_T_/housing", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/icon.png": { type: "override", path: "/icon.png", headers: { "cache-control": "public, immutable, no-transform, max-age=31536000", "content-type": "image/png", "x-next-cache-tags": "_N_T_/layout,_N_T_/icon.png/layout,_N_T_/icon.png/route,_N_T_/icon.png", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/index.html": { type: "override", path: "/index.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/index": { type: "override", path: "/index.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/": { type: "override", path: "/index.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/index.rsc": { type: "override", path: "/index.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/bruntsfield.html": { type: "override", path: "/neighbourhoods/bruntsfield.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/bruntsfield", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/bruntsfield": { type: "override", path: "/neighbourhoods/bruntsfield.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/bruntsfield", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/bruntsfield.rsc": { type: "override", path: "/neighbourhoods/bruntsfield.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/bruntsfield", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/canonmills.html": { type: "override", path: "/neighbourhoods/canonmills.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/canonmills", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/canonmills": { type: "override", path: "/neighbourhoods/canonmills.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/canonmills", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/canonmills.rsc": { type: "override", path: "/neighbourhoods/canonmills.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/canonmills", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/corstorphine.html": { type: "override", path: "/neighbourhoods/corstorphine.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/corstorphine", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/corstorphine": { type: "override", path: "/neighbourhoods/corstorphine.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/corstorphine", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/corstorphine.rsc": { type: "override", path: "/neighbourhoods/corstorphine.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/corstorphine", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/dalry.html": { type: "override", path: "/neighbourhoods/dalry.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/dalry", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/dalry": { type: "override", path: "/neighbourhoods/dalry.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/dalry", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/dalry.rsc": { type: "override", path: "/neighbourhoods/dalry.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/dalry", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/dean-village.html": { type: "override", path: "/neighbourhoods/dean-village.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/dean-village", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/dean-village": { type: "override", path: "/neighbourhoods/dean-village.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/dean-village", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/dean-village.rsc": { type: "override", path: "/neighbourhoods/dean-village.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/dean-village", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/granton.html": { type: "override", path: "/neighbourhoods/granton.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/granton", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/granton": { type: "override", path: "/neighbourhoods/granton.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/granton", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/granton.rsc": { type: "override", path: "/neighbourhoods/granton.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/granton", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/haymarket.html": { type: "override", path: "/neighbourhoods/haymarket.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/haymarket", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/haymarket": { type: "override", path: "/neighbourhoods/haymarket.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/haymarket", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/haymarket.rsc": { type: "override", path: "/neighbourhoods/haymarket.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/haymarket", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/leith.html": { type: "override", path: "/neighbourhoods/leith.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/leith", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/leith": { type: "override", path: "/neighbourhoods/leith.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/leith", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/leith.rsc": { type: "override", path: "/neighbourhoods/leith.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/leith", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/liberton.html": { type: "override", path: "/neighbourhoods/liberton.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/liberton", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/liberton": { type: "override", path: "/neighbourhoods/liberton.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/liberton", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/liberton.rsc": { type: "override", path: "/neighbourhoods/liberton.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/liberton", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/marchmont.html": { type: "override", path: "/neighbourhoods/marchmont.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/marchmont", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/marchmont": { type: "override", path: "/neighbourhoods/marchmont.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/marchmont", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/marchmont.rsc": { type: "override", path: "/neighbourhoods/marchmont.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/marchmont", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/meadowbank.html": { type: "override", path: "/neighbourhoods/meadowbank.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/meadowbank", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/meadowbank": { type: "override", path: "/neighbourhoods/meadowbank.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/meadowbank", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/meadowbank.rsc": { type: "override", path: "/neighbourhoods/meadowbank.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/meadowbank", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/morningside.html": { type: "override", path: "/neighbourhoods/morningside.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/morningside", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/morningside": { type: "override", path: "/neighbourhoods/morningside.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/morningside", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/morningside.rsc": { type: "override", path: "/neighbourhoods/morningside.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/morningside", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/murrayfield.html": { type: "override", path: "/neighbourhoods/murrayfield.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/murrayfield", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/murrayfield": { type: "override", path: "/neighbourhoods/murrayfield.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/murrayfield", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/murrayfield.rsc": { type: "override", path: "/neighbourhoods/murrayfield.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/murrayfield", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/new-town.html": { type: "override", path: "/neighbourhoods/new-town.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/new-town", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/new-town": { type: "override", path: "/neighbourhoods/new-town.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/new-town", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/new-town.rsc": { type: "override", path: "/neighbourhoods/new-town.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/new-town", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/newington.html": { type: "override", path: "/neighbourhoods/newington.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/newington", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/newington": { type: "override", path: "/neighbourhoods/newington.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/newington", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/newington.rsc": { type: "override", path: "/neighbourhoods/newington.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/newington", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/old-town.html": { type: "override", path: "/neighbourhoods/old-town.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/old-town", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/old-town": { type: "override", path: "/neighbourhoods/old-town.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/old-town", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/old-town.rsc": { type: "override", path: "/neighbourhoods/old-town.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/old-town", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/portobello.html": { type: "override", path: "/neighbourhoods/portobello.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/portobello", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/portobello": { type: "override", path: "/neighbourhoods/portobello.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/portobello", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/portobello.rsc": { type: "override", path: "/neighbourhoods/portobello.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/portobello", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/stockbridge.html": { type: "override", path: "/neighbourhoods/stockbridge.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/stockbridge", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/stockbridge": { type: "override", path: "/neighbourhoods/stockbridge.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/stockbridge", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/stockbridge.rsc": { type: "override", path: "/neighbourhoods/stockbridge.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/stockbridge", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/tollcross.html": { type: "override", path: "/neighbourhoods/tollcross.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/tollcross", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/tollcross": { type: "override", path: "/neighbourhoods/tollcross.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/tollcross", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/tollcross.rsc": { type: "override", path: "/neighbourhoods/tollcross.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/tollcross", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods/trinity.html": { type: "override", path: "/neighbourhoods/trinity.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/trinity", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/trinity": { type: "override", path: "/neighbourhoods/trinity.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/trinity", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods/trinity.rsc": { type: "override", path: "/neighbourhoods/trinity.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/[slug]/layout,_N_T_/neighbourhoods/[slug]/page,_N_T_/neighbourhoods/trinity", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/neighbourhoods.html": { type: "override", path: "/neighbourhoods.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/page,_N_T_/neighbourhoods", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods": { type: "override", path: "/neighbourhoods.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/page,_N_T_/neighbourhoods", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/neighbourhoods.rsc": { type: "override", path: "/neighbourhoods.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/neighbourhoods/layout,_N_T_/neighbourhoods/page,_N_T_/neighbourhoods", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/resident.html": { type: "override", path: "/resident.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/resident/layout,_N_T_/resident/page,_N_T_/resident", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/resident": { type: "override", path: "/resident.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/resident/layout,_N_T_/resident/page,_N_T_/resident", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/resident.rsc": { type: "override", path: "/resident.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/resident/layout,_N_T_/resident/page,_N_T_/resident", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/robots.txt": { type: "override", path: "/robots.txt", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "text/plain", "x-next-cache-tags": "_N_T_/layout,_N_T_/robots.txt/layout,_N_T_/robots.txt/route,_N_T_/robots.txt", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/sitemap.xml": { type: "override", path: "/sitemap.xml", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "application/xml", "x-next-cache-tags": "_N_T_/layout,_N_T_/sitemap.xml/layout,_N_T_/sitemap.xml/route,_N_T_/sitemap.xml", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/transport.html": { type: "override", path: "/transport.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/transport/layout,_N_T_/transport/page,_N_T_/transport", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/transport": { type: "override", path: "/transport.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/transport/layout,_N_T_/transport/page,_N_T_/transport", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/transport.rsc": { type: "override", path: "/transport.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/transport/layout,_N_T_/transport/page,_N_T_/transport", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/visitor-essentials.html": { type: "override", path: "/visitor-essentials.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/visitor-essentials/layout,_N_T_/visitor-essentials/page,_N_T_/visitor-essentials", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/visitor-essentials": { type: "override", path: "/visitor-essentials.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/visitor-essentials/layout,_N_T_/visitor-essentials/page,_N_T_/visitor-essentials", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/visitor-essentials.rsc": { type: "override", path: "/visitor-essentials.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/visitor-essentials/layout,_N_T_/visitor-essentials/page,_N_T_/visitor-essentials", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/visitor.html": { type: "override", path: "/visitor.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/visitor/layout,_N_T_/visitor/page,_N_T_/visitor", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/visitor": { type: "override", path: "/visitor.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/visitor/layout,_N_T_/visitor/page,_N_T_/visitor", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/visitor.rsc": { type: "override", path: "/visitor.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/visitor/layout,_N_T_/visitor/page,_N_T_/visitor", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/youth.html": { type: "override", path: "/youth.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/youth/layout,_N_T_/youth/page,_N_T_/youth", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/youth": { type: "override", path: "/youth.html", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/youth/layout,_N_T_/youth/page,_N_T_/youth", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/youth.rsc": { type: "override", path: "/youth.rsc", headers: { "x-nextjs-stale-time": "300", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/youth/layout,_N_T_/youth/page,_N_T_/youth", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } } };
});
var $ = U((ze, F) => {
  "use strict";
  u();
  c();
  _();
  function f(e, t) {
    e = String(e || "").trim();
    let o = e, r, a = "";
    if (/^[^a-zA-Z\\\s]/.test(e)) {
      r = e[0];
      let i = e.lastIndexOf(r);
      a += e.substring(i + 1), e = e.substring(1, i);
    }
    let s = 0;
    return e = _e(e, (i) => {
      if (/^\(\?[P<']/.test(i)) {
        let h = /^\(\?P?[<']([^>']+)[>']/.exec(i);
        if (!h) throw new Error(`Failed to extract named captures from ${JSON.stringify(i)}`);
        let l = i.substring(h[0].length, i.length - 1);
        return t && (t[s] = h[1]), s++, `(${l})`;
      }
      return i.substring(0, 3) === "(?:" || s++, i;
    }), e = e.replace(/\[:([^:]+):\]/g, (i, h) => f.characterClasses[h] || i), new f.PCRE(e, a, o, a, r);
  }
  __name(f, "f");
  function _e(e, t) {
    let o = 0, r = 0, a = false;
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      if (a) {
        a = false;
        continue;
      }
      switch (s) {
        case "(":
          r === 0 && (o = n), r++;
          break;
        case ")":
          if (r > 0 && (r--, r === 0)) {
            let i = n + 1, h = o === 0 ? "" : e.substring(0, o), l = e.substring(i), d = String(t(e.substring(o, i)));
            e = h + d + l, n = o;
          }
          break;
        case "\\":
          a = true;
          break;
        default:
          break;
      }
    }
    return e;
  }
  __name(_e, "_e");
  (function(e) {
    class t extends RegExp {
      static {
        __name(this, "t");
      }
      constructor(r, a, n, s, i) {
        super(r, a), this.pcrePattern = n, this.pcreFlags = s, this.delimiter = i;
      }
    }
    e.PCRE = t, e.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(f || (f = {}));
  f.prototype = f.PCRE.prototype;
  F.exports = f;
});
var Q = U((q) => {
  "use strict";
  u();
  c();
  _();
  q.parse = be;
  q.serialize = Se;
  var Re = Object.prototype.toString, C = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function be(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    for (var o = {}, r = t || {}, a = r.decode || ve, n = 0; n < e.length; ) {
      var s = e.indexOf("=", n);
      if (s === -1) break;
      var i = e.indexOf(";", n);
      if (i === -1) i = e.length;
      else if (i < s) {
        n = e.lastIndexOf(";", s - 1) + 1;
        continue;
      }
      var h = e.slice(n, s).trim();
      if (o[h] === void 0) {
        var l = e.slice(s + 1, i).trim();
        l.charCodeAt(0) === 34 && (l = l.slice(1, -1)), o[h] = we(l, a);
      }
      n = i + 1;
    }
    return o;
  }
  __name(be, "be");
  function Se(e, t, o) {
    var r = o || {}, a = r.encode || Pe;
    if (typeof a != "function") throw new TypeError("option encode is invalid");
    if (!C.test(e)) throw new TypeError("argument name is invalid");
    var n = a(t);
    if (n && !C.test(n)) throw new TypeError("argument val is invalid");
    var s = e + "=" + n;
    if (r.maxAge != null) {
      var i = r.maxAge - 0;
      if (isNaN(i) || !isFinite(i)) throw new TypeError("option maxAge is invalid");
      s += "; Max-Age=" + Math.floor(i);
    }
    if (r.domain) {
      if (!C.test(r.domain)) throw new TypeError("option domain is invalid");
      s += "; Domain=" + r.domain;
    }
    if (r.path) {
      if (!C.test(r.path)) throw new TypeError("option path is invalid");
      s += "; Path=" + r.path;
    }
    if (r.expires) {
      var h = r.expires;
      if (!je(h) || isNaN(h.valueOf())) throw new TypeError("option expires is invalid");
      s += "; Expires=" + h.toUTCString();
    }
    if (r.httpOnly && (s += "; HttpOnly"), r.secure && (s += "; Secure"), r.priority) {
      var l = typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority;
      switch (l) {
        case "low":
          s += "; Priority=Low";
          break;
        case "medium":
          s += "; Priority=Medium";
          break;
        case "high":
          s += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (r.sameSite) {
      var d = typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite;
      switch (d) {
        case true:
          s += "; SameSite=Strict";
          break;
        case "lax":
          s += "; SameSite=Lax";
          break;
        case "strict":
          s += "; SameSite=Strict";
          break;
        case "none":
          s += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return s;
  }
  __name(Se, "Se");
  function ve(e) {
    return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
  }
  __name(ve, "ve");
  function Pe(e) {
    return encodeURIComponent(e);
  }
  __name(Pe, "Pe");
  function je(e) {
    return Re.call(e) === "[object Date]" || e instanceof Date;
  }
  __name(je, "je");
  function we(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
  __name(we, "we");
});
u();
c();
_();
u();
c();
_();
u();
c();
_();
var R = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
u();
c();
_();
u();
c();
_();
u();
c();
_();
u();
c();
_();
var D = V($());
function P(e, t, o) {
  if (t == null) return { match: null, captureGroupKeys: [] };
  let r = o ? "" : "i", a = [];
  return { match: (0, D.default)(`%${e}%${r}`, a).exec(t), captureGroupKeys: a };
}
__name(P, "P");
function b(e, t, o, { namedOnly: r } = {}) {
  return e.replace(/\$([a-zA-Z0-9_]+)/g, (a, n) => {
    let s = o.indexOf(n);
    return r && s === -1 ? a : (s === -1 ? t[parseInt(n, 10)] : t[s + 1]) || "";
  });
}
__name(b, "b");
function I(e, { url: t, cookies: o, headers: r, routeDest: a }) {
  switch (e.type) {
    case "host":
      return { valid: t.hostname === e.value };
    case "header":
      return e.value !== void 0 ? M(e.value, r.get(e.key), a) : { valid: r.has(e.key) };
    case "cookie": {
      let n = o[e.key];
      return n && e.value !== void 0 ? M(e.value, n, a) : { valid: n !== void 0 };
    }
    case "query":
      return e.value !== void 0 ? M(e.value, t.searchParams.get(e.key), a) : { valid: t.searchParams.has(e.key) };
  }
}
__name(I, "I");
function M(e, t, o) {
  let { match: r, captureGroupKeys: a } = P(e, t);
  return o && r && a.length ? { valid: !!r, newRouteDest: b(o, r, a, { namedOnly: true }) } : { valid: !!r };
}
__name(M, "M");
u();
c();
_();
function B(e) {
  let t = new Headers(e.headers);
  return e.cf && (t.set("x-vercel-ip-city", encodeURIComponent(e.cf.city)), t.set("x-vercel-ip-country", e.cf.country), t.set("x-vercel-ip-country-region", e.cf.regionCode), t.set("x-vercel-ip-latitude", e.cf.latitude), t.set("x-vercel-ip-longitude", e.cf.longitude)), t.set("x-vercel-sc-host", R), new Request(e, { headers: t });
}
__name(B, "B");
u();
c();
_();
function m(e, t, o) {
  let r = t instanceof Headers ? t.entries() : Object.entries(t);
  for (let [a, n] of r) {
    let s = a.toLowerCase(), i = o?.match ? b(n, o.match, o.captureGroupKeys) : n;
    s === "set-cookie" ? e.append(s, i) : e.set(s, i);
  }
}
__name(m, "m");
function S(e) {
  return /^https?:\/\//.test(e);
}
__name(S, "S");
function N(e, t) {
  for (let [o, r] of t.entries()) {
    let a = /^nxtP(.+)$/.exec(o), n = /^nxtI(.+)$/.exec(o);
    a?.[1] ? (e.set(o, r), e.set(a[1], r)) : n?.[1] ? e.set(n[1], r.replace(/(\(\.+\))+/, "")) : (!e.has(o) || !!r && !e.getAll(o).includes(r)) && e.append(o, r);
  }
}
__name(N, "N");
function A(e, t) {
  let o = new URL(t, e.url);
  return N(o.searchParams, new URL(e.url).searchParams), o.pathname = o.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(o, e);
}
__name(A, "A");
function v(e) {
  return new Response(e.body, e);
}
__name(v, "v");
function L(e) {
  return e.split(",").map((t) => {
    let [o, r] = t.split(";"), a = parseFloat((r ?? "q=1").replace(/q *= */gi, ""));
    return [o.trim(), isNaN(a) ? 1 : a];
  }).sort((t, o) => o[1] - t[1]).map(([t]) => t === "*" || t === "" ? [] : t).flat();
}
__name(L, "L");
u();
c();
_();
function O(e) {
  switch (e) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
__name(O, "O");
async function j(e, { request: t, assetsFetcher: o, ctx: r }, { path: a, searchParams: n }) {
  let s, i = new URL(t.url);
  N(i.searchParams, n);
  let h = new Request(i, t);
  try {
    switch (e?.type) {
      case "function":
      case "middleware": {
        let l = await import(e.entrypoint);
        try {
          s = await l.default(h, r);
        } catch (d) {
          let y = d;
          throw y.name === "TypeError" && y.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${e.entrypoint})`) : d;
        }
        break;
      }
      case "override": {
        s = v(await o.fetch(A(h, e.path ?? a))), e.headers && m(s.headers, e.headers);
        break;
      }
      case "static": {
        s = await o.fetch(A(h, a));
        break;
      }
      default:
        s = new Response("Not Found", { status: 404 });
    }
  } catch (l) {
    return console.error(l), new Response("Internal Server Error", { status: 500 });
  }
  return v(s);
}
__name(j, "j");
function K(e, t) {
  let o = "^//?(?:", r = ")/(.*)$";
  return !e.startsWith(o) || !e.endsWith(r) ? false : e.slice(o.length, -r.length).split("|").every((n) => t.has(n));
}
__name(K, "K");
u();
c();
_();
function le(e, { protocol: t, hostname: o, port: r, pathname: a }) {
  return !(t && e.protocol.replace(/:$/, "") !== t || !new RegExp(o).test(e.hostname) || r && !new RegExp(r).test(e.port) || a && !new RegExp(a).test(e.pathname));
}
__name(le, "le");
function de(e, t) {
  if (e.method !== "GET") return;
  let { origin: o, searchParams: r } = new URL(e.url), a = r.get("url"), n = Number.parseInt(r.get("w") ?? "", 10), s = Number.parseInt(r.get("q") ?? "75", 10);
  if (!a || Number.isNaN(n) || Number.isNaN(s) || !t?.sizes?.includes(n) || s < 0 || s > 100) return;
  let i = new URL(a, o);
  if (i.pathname.endsWith(".svg") && !t?.dangerouslyAllowSVG) return;
  let h = a.startsWith("//"), l = a.startsWith("/") && !h;
  if (!l && !t?.domains?.includes(i.hostname) && !t?.remotePatterns?.find((T) => le(i, T))) return;
  let d = e.headers.get("Accept") ?? "", y = t?.formats?.find((T) => d.includes(T))?.replace("image/", "");
  return { isRelative: l, imageUrl: i, options: { width: n, quality: s, format: y } };
}
__name(de, "de");
function pe(e, t, o) {
  let r = new Headers();
  if (o?.contentSecurityPolicy && r.set("Content-Security-Policy", o.contentSecurityPolicy), o?.contentDispositionType) {
    let n = t.pathname.split("/").pop(), s = n ? `${o.contentDispositionType}; filename="${n}"` : o.contentDispositionType;
    r.set("Content-Disposition", s);
  }
  e.headers.has("Cache-Control") || r.set("Cache-Control", `public, max-age=${o?.minimumCacheTTL ?? 60}`);
  let a = v(e);
  return m(a.headers, r), a;
}
__name(pe, "pe");
async function G(e, { buildOutput: t, assetsFetcher: o, imagesConfig: r }) {
  let a = de(e, r);
  if (!a) return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: n, imageUrl: s } = a, h = await (n && s.pathname in t ? o.fetch.bind(o) : fetch)(s);
  return pe(h, s, r);
}
__name(G, "G");
u();
c();
_();
u();
c();
_();
u();
c();
_();
async function w(e) {
  return import(e);
}
__name(w, "w");
var xe = "x-vercel-cache-tags";
var ge = "x-next-cache-soft-tags";
var ye = /* @__PURE__ */ Symbol.for("__cloudflare-request-context__");
async function J(e) {
  let t = `https://${R}/v1/suspense-cache/`;
  if (!e.url.startsWith(t)) return null;
  try {
    let o = new URL(e.url), r = await me();
    if (o.pathname === "/v1/suspense-cache/revalidate") {
      let n = o.searchParams.get("tags")?.split(",") ?? [];
      for (let s of n) await r.revalidateTag(s);
      return new Response(null, { status: 200 });
    }
    let a = o.pathname.replace("/v1/suspense-cache/", "");
    if (!a.length) return new Response("Invalid cache key", { status: 400 });
    switch (e.method) {
      case "GET": {
        let n = z(e, ge), s = await r.get(a, { softTags: n });
        return s ? new Response(JSON.stringify(s.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (s.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let n = globalThis[ye], s = /* @__PURE__ */ __name(async () => {
          let i = await e.json();
          i.data.tags === void 0 && (i.tags ??= z(e, xe) ?? []), await r.set(a, i);
        }, "s");
        return n ? n.ctx.waitUntil(s()) : await s(), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (o) {
    return console.error(o), new Response("Error handling cache request", { status: 500 });
  }
}
__name(J, "J");
async function me() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? W("kv") : W("cache-api");
}
__name(me, "me");
async function W(e) {
  let t = `./__next-on-pages-dist__/cache/${e}.js`, o = await w(t);
  return new o.default();
}
__name(W, "W");
function z(e, t) {
  return e.headers.get(t)?.split(",")?.filter(Boolean);
}
__name(z, "z");
function X() {
  globalThis[Z] || (Ne(), globalThis[Z] = true);
}
__name(X, "X");
function Ne() {
  let e = globalThis.fetch;
  globalThis.fetch = async (...t) => {
    let o = new Request(...t), r = await fe(o);
    return r || (r = await J(o), r) ? r : (Te(o), e(o));
  };
}
__name(Ne, "Ne");
async function fe(e) {
  if (e.url.startsWith("blob:")) try {
    let o = `./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`, r = (await w(o)).default, a = { async arrayBuffer() {
      return r;
    }, get body() {
      return new ReadableStream({ start(n) {
        let s = Buffer.from(r);
        n.enqueue(s), n.close();
      } });
    }, async text() {
      return Buffer.from(r).toString();
    }, async json() {
      let n = Buffer.from(r);
      return JSON.stringify(n.toString());
    }, async blob() {
      return new Blob(r);
    } };
    return a.clone = () => ({ ...a }), a;
  } catch {
  }
  return null;
}
__name(fe, "fe");
function Te(e) {
  e.headers.has("user-agent") || e.headers.set("user-agent", "Next.js Middleware");
}
__name(Te, "Te");
var Z = /* @__PURE__ */ Symbol.for("next-on-pages fetch patch");
u();
c();
_();
var Y = V(Q());
var k = class {
  static {
    __name(this, "k");
  }
  constructor(t, o, r, a, n) {
    this.routes = t;
    this.output = o;
    this.reqCtx = r;
    this.url = new URL(r.request.url), this.cookies = (0, Y.parse)(r.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), N(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = n?.find((s) => s.domain === this.url.hostname), this.locales = new Set(a.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(t, { checkStatus: o, checkIntercept: r }) {
    let a = P(t.src, this.path, t.caseSensitive);
    if (!a.match || t.methods && !t.methods.map((s) => s.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase())) return;
    let n = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: t.dest };
    if (!t.has?.find((s) => {
      let i = I(s, n);
      return i.newRouteDest && (n.routeDest = i.newRouteDest), !i.valid;
    }) && !t.missing?.find((s) => I(s, n).valid) && !(o && t.status !== this.status)) {
      if (r && t.dest) {
        let s = /\/(\(\.+\))+/, i = s.test(t.dest), h = s.test(this.path);
        if (i && !h) return;
      }
      return { routeMatch: a, routeDest: n.routeDest };
    }
  }
  processMiddlewareResp(t) {
    let o = "x-middleware-override-headers", r = t.headers.get(o);
    if (r) {
      let h = new Set(r.split(",").map((l) => l.trim()));
      for (let l of h.keys()) {
        let d = `x-middleware-request-${l}`, y = t.headers.get(d);
        this.reqCtx.request.headers.get(l) !== y && (y ? this.reqCtx.request.headers.set(l, y) : this.reqCtx.request.headers.delete(l)), t.headers.delete(d);
      }
      t.headers.delete(o);
    }
    let a = "x-middleware-rewrite", n = t.headers.get(a);
    if (n) {
      let h = new URL(n, this.url), l = this.url.hostname !== h.hostname;
      this.path = l ? `${h}` : h.pathname, N(this.searchParams, h.searchParams), t.headers.delete(a);
    }
    let s = "x-middleware-next";
    t.headers.get(s) ? t.headers.delete(s) : !n && !t.headers.has("location") ? (this.body = t.body, this.status = t.status) : t.headers.has("location") && t.status >= 300 && t.status < 400 && (this.status = t.status), m(this.reqCtx.request.headers, t.headers), m(this.headers.normal, t.headers), this.headers.middlewareLocation = t.headers.get("location");
  }
  async runRouteMiddleware(t) {
    if (!t) return true;
    let o = t && this.output[t];
    if (!o || o.type !== "middleware") return this.status = 500, false;
    let r = await j(o, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(t), r.status === 500 ? (this.status = r.status, false) : (this.processMiddlewareResp(r), true);
  }
  applyRouteOverrides(t) {
    !t.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(t, o, r) {
    !t.headers || (m(this.headers.normal, t.headers, { match: o, captureGroupKeys: r }), t.important && m(this.headers.important, t.headers, { match: o, captureGroupKeys: r }));
  }
  applyRouteStatus(t) {
    !t.status || (this.status = t.status);
  }
  applyRouteDest(t, o, r) {
    if (!t.dest) return this.path;
    let a = this.path, n = t.dest;
    this.wildcardMatch && /\$wildcard/.test(n) && (n = n.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = b(n, o, r);
    let s = /\/index\.rsc$/i.test(this.path), i = /^\/(?:index)?$/i.test(a), h = /^\/__index\.prefetch\.rsc$/i.test(a);
    s && !i && !h && (this.path = a);
    let l = /\.rsc$/i.test(this.path), d = /\.prefetch\.rsc$/i.test(this.path), y = this.path in this.output;
    l && !d && !y && (this.path = this.path.replace(/\.rsc/i, ""));
    let T = new URL(this.path, this.url);
    return N(this.searchParams, T.searchParams), S(this.path) || (this.path = T.pathname), a;
  }
  applyLocaleRedirects(t) {
    if (!t.locale?.redirect || !/^\^(.)*$/.test(t.src) && t.src !== this.path || this.headers.normal.has("location")) return;
    let { locale: { redirect: r, cookie: a } } = t, n = a && this.cookies[a], s = L(n ?? ""), i = L(this.reqCtx.request.headers.get("accept-language") ?? ""), d = [...s, ...i].map((y) => r[y]).filter(Boolean)[0];
    if (d) {
      !this.path.startsWith(d) && (this.headers.normal.set("location", d), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(t, o) {
    return !this.locales || o !== "miss" ? t : K(t.src, this.locales) ? { ...t, src: t.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : t;
  }
  async checkRoute(t, o) {
    let r = this.getLocaleFriendlyRoute(o, t), { routeMatch: a, routeDest: n } = this.checkRouteMatch(r, { checkStatus: t === "error", checkIntercept: t === "rewrite" }) ?? {}, s = { ...r, dest: n };
    if (!a?.match || s.middlewarePath && this.middlewareInvoked.includes(s.middlewarePath)) return "skip";
    let { match: i, captureGroupKeys: h } = a;
    if (this.applyRouteOverrides(s), this.applyLocaleRedirects(s), !await this.runRouteMiddleware(s.middlewarePath)) return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation) return "done";
    this.applyRouteHeaders(s, i, h), this.applyRouteStatus(s);
    let d = this.applyRouteDest(s, i, h);
    if (s.check && !S(this.path)) if (d === this.path) {
      if (t !== "miss") return this.checkPhase(O(t));
      this.status = 404;
    } else if (t === "miss") {
      if (!(this.path in this.output) && !(this.path.replace(/\/$/, "") in this.output)) return this.checkPhase("filesystem");
      this.status === 404 && (this.status = void 0);
    } else return this.checkPhase("none");
    return !s.continue || s.status && s.status >= 300 && s.status <= 399 ? "done" : "next";
  }
  async checkPhase(t) {
    if (this.checkPhaseCounter++ >= 50) return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let o = true;
    for (let n of this.routes[t]) {
      let s = await this.checkRoute(t, n);
      if (s === "error") return "error";
      if (s === "done") {
        o = false;
        break;
      }
    }
    if (t === "hit" || S(this.path) || this.headers.normal.has("location") || !!this.body) return "done";
    if (t === "none") for (let n of this.locales) {
      let s = new RegExp(`/${n}(/.*)`), h = this.path.match(s)?.[1];
      if (h && h in this.output) {
        this.path = h;
        break;
      }
    }
    let r = this.path in this.output;
    if (!r && this.path.endsWith("/")) {
      let n = this.path.replace(/\/$/, "");
      r = n in this.output, r && (this.path = n);
    }
    if (t === "miss" && !r) {
      let n = !this.status || this.status < 400;
      this.status = n ? 404 : this.status;
    }
    let a = "miss";
    return r || t === "miss" || t === "error" ? a = "hit" : o && (a = O(t)), this.checkPhase(a);
  }
  async run(t = "none") {
    this.checkPhaseCounter = 0;
    let o = await this.checkPhase(t);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), o;
  }
};
async function ee(e, t, o, r) {
  let a = new k(t.routes, o, e, r, t.wildcard), n = await te(a);
  return Ce(e, n, o);
}
__name(ee, "ee");
async function te(e, t = "none", o = false) {
  return await e.run(t) === "error" || !o && e.status && e.status >= 400 ? te(e, "error", true) : { path: e.path, status: e.status, headers: e.headers, searchParams: e.searchParams, body: e.body };
}
__name(te, "te");
async function Ce(e, { path: t = "/404", status: o, headers: r, searchParams: a, body: n }, s) {
  let i = r.normal.get("location");
  if (i) {
    if (i !== r.middlewareLocation) {
      let d = [...a.keys()].length ? `?${a.toString()}` : "";
      r.normal.set("location", `${i ?? "/"}${d}`);
    }
    return new Response(null, { status: o, headers: r.normal });
  }
  let h;
  if (n !== void 0) h = new Response(n, { status: o });
  else if (S(t)) {
    let d = new URL(t);
    N(d.searchParams, a), h = await fetch(d, e.request);
  } else h = await j(s[t], e, { path: t, status: o, headers: r, searchParams: a });
  let l = r.normal;
  return m(l, h.headers), m(l, r.important), h = new Response(h.body, { ...h, status: o || h.status, headers: l }), h;
}
__name(Ce, "Ce");
u();
c();
_();
function re() {
  globalThis.__nextOnPagesRoutesIsolation ??= { _map: /* @__PURE__ */ new Map(), getProxyFor: ke };
}
__name(re, "re");
function ke(e) {
  let t = globalThis.__nextOnPagesRoutesIsolation._map.get(e);
  if (t) return t;
  let o = Ee();
  return globalThis.__nextOnPagesRoutesIsolation._map.set(e, o), o;
}
__name(ke, "ke");
function Ee() {
  let e = /* @__PURE__ */ new Map();
  return new Proxy(globalThis, { get: /* @__PURE__ */ __name((t, o) => e.has(o) ? e.get(o) : Reflect.get(globalThis, o), "get"), set: /* @__PURE__ */ __name((t, o, r) => Me.has(o) ? Reflect.set(globalThis, o, r) : (e.set(o, r), true), "set") });
}
__name(Ee, "Ee");
var Me = /* @__PURE__ */ new Set(["_nextOriginalFetch", "fetch", "__incrementalCache"]);
var Ie = Object.defineProperty;
var Ae = /* @__PURE__ */ __name((...e) => {
  let t = e[0], o = e[1], r = "__import_unsupported";
  if (!(o === r && typeof t == "object" && t !== null && r in t)) return Ie(...e);
}, "Ae");
globalThis.Object.defineProperty = Ae;
globalThis.AbortController = class extends AbortController {
  constructor() {
    try {
      super();
    } catch (t) {
      if (t instanceof Error && t.message.includes("Disallowed operation called within global scope")) return { signal: { aborted: false, reason: null, onabort: /* @__PURE__ */ __name(() => {
      }, "onabort"), throwIfAborted: /* @__PURE__ */ __name(() => {
      }, "throwIfAborted") }, abort() {
      } };
      throw t;
    }
  }
};
var vr = { async fetch(e, t, o) {
  re(), X();
  let r = await __ALSes_PROMISE__;
  if (!r) {
    let s = new URL(e.url), i = await t.ASSETS.fetch(`${s.protocol}//${s.host}/cdn-cgi/errors/no-nodejs_compat.html`), h = i.ok ? i.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(h, { status: 503 });
  }
  let { envAsyncLocalStorage: a, requestContextAsyncLocalStorage: n } = r;
  return a.run({ ...t, NODE_ENV: "production", SUSPENSE_CACHE_URL: R }, async () => n.run({ env: t, ctx: o, cf: e.cf }, async () => {
    if (new URL(e.url).pathname.startsWith("/_next/image")) return G(e, { buildOutput: x, assetsFetcher: t.ASSETS, imagesConfig: p.images });
    let i = B(e);
    return ee({ request: i, ctx: o, assetsFetcher: t.ASSETS }, p, x, g);
  }));
} };
export {
  vr as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=bundledWorker-0.7030322412965182.mjs.map
