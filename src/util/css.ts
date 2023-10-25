export function css(...classes: (string | null | undefined)[]): string {
  return classes.flatMap(c => c?.split(' ')).filter(x => x).join(' ');
}
