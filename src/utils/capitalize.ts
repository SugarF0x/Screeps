export const capitalize = (text: string, all = false, separator = ' ') => {
  if(!all) return text.charAt(0).toUpperCase() + text.slice(1)

  let words = text.split(separator)
  for (let i = 0; i < words.length; i++) words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)

  return words.join(separator)
}
