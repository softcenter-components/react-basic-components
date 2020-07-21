export const adaptRegExp = (s) => {
  const c = '[cç]'
  const a = '[aäáàãâ]'
  const e = '[eëéèẽê]'
  const i = '[iïíìĩî]'
  const o = '[oöóòõô]'
  const u = '[uüúùũû]'
  s = s.replace(new RegExp(c, 'g'), c)
  s = s.replace(new RegExp(a, 'g'), a)
  s = s.replace(new RegExp(e, 'g'), e)
  s = s.replace(new RegExp(i, 'g'), i)
  s = s.replace(new RegExp(o, 'g'), o)
  s = s.replace(new RegExp(u, 'g'), u)
  return s
}
