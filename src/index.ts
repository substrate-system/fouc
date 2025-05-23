export function fouc (cb?:()=>any):Promise<void>|void {
    if (!cb) {
        return new Promise(resolve => {
            if (document.readyState !== 'loading') {
                resolve()
            } else {
                document.addEventListener('DOMContentLoaded', () => resolve())
            }
        })
    }

    if (document.readyState !== 'loading') {
        // start things
        cb()
    } else {
        // still loading
        // wait for event
        document.addEventListener('DOMContentLoaded', cb)
    }
}
