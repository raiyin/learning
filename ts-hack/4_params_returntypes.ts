interface User { id: string, data: string }

function fn(arg1: string, arg2: boolean) {
    return { id: '1', data: 'value' }
}

type FnResult = ReturnType<typeof fn>
type FnArgs = Parameters<typeof fn>

const args: FnArgs = ['1', true]
