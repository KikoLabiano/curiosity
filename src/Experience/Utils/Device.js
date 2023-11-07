export default class Device {
  constructor() {
    this.instance = navigator.userAgentData;
  }

  isMobile() {
    return this.instance.mobile;
  }
}
