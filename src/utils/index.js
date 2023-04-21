export function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
      return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
  
  }


export function warpTag(content, keyword, tagName) {
  if (content === "No results") {
      return content
  }
  const a = content.toLowerCase();
  const b = keyword.toLowerCase();

  const indexof = a.indexOf(b);
  const c = indexof > -1 ? content.substr(indexof, keyword.length) : '';
  const val = `<${tagName} style="color:red;">${c}</${tagName}>`;
  const regS = new RegExp(keyword, 'gi');
  return content.replace(regS, val);
}