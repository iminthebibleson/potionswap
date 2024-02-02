new TypeIt("#header_text", {
    strings: "potionswap bot",
    startDelay: 900,
    speed: 100,
    loop: false,
    html: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function (instance) {instance.destroy();}
}).go();

new TypeIt("#title_text", {
  strings: "Discord Bot",
  startDelay: 900,
  speed: 100,
  loop: false,
  html: true,
  waitUntilVisible: true,
  lifelike: true,
  afterComplete: function (instance) {instance.destroy();}
}).go();

new TypeIt("#currency_text", {
  strings: "List's all available currencies that can be used to swap tokens and more",
  startDelay: 900,
  speed: 100,
  loop: false,
  html: true,
  waitUntilVisible: true,
  lifelike: true,
  afterComplete: function (instance) {instance.destroy();}
}).go();

new TypeIt("#exchange_text", {
  strings: "Show's all the currency pairs from which and to which to convert",
  startDelay: 900,
  speed: 100,
  loop: false,
  html: true,
  waitUntilVisible: true,
  lifelike: true,
  afterComplete: function (instance) {instance.destroy();}
}).go();

new TypeIt("#exchange_status_text", {
  strings: "Displays or identify of the transaction",
  startDelay: 900,
  speed: 100,
  loop: false,
  html: true,
  waitUntilVisible: true,
  lifelike: true,
  afterComplete: function (instance) {instance.destroy();}
}).go();

new TypeIt("#more_text", {
  strings: "More features coming soon",
  startDelay: 900,
  speed: 100,
  loop: false,
  html: true,
  waitUntilVisible: true,
  lifelike: true,
  afterComplete: function (instance) {instance.destroy();}
}).go();
