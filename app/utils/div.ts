import "server-only";

export function div(a: number, b: number) {
    if (b == 0) {
        return "El divisor debe ser diferente a cero";
    }

    return a / b;
}
