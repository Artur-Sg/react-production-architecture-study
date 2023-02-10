// custom analogue of classnames lib

type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  additional: Array<string | undefined>,
  mods: Mods = {}
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([classes]) => classes),
  ].join(' ');
}
