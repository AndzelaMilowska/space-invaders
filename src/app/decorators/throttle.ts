export function throttle(callbackFn: any, delayTime: number) {
let lastTime = 0

return (...args: any) => {
    const currentTime = new Date().getTime()
    if (currentTime-lastTime < delayTime) return;
    lastTime = currentTime
    callbackFn(...args)
}
}
