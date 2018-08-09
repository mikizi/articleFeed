export default class style {
    constructor()
    {
        //minified css compressed from main.css generated from main.less..
        const css = `*{box-sizing:border-box;text-decoration:none}body{width:100%;height:100%;margin:0;padding:0;color:#404040;font:100 1em/150% proxima-nova,Helvetica,sans-serif}h1,h2,h3,h4{font-weight:900;color:#333;margin:1.5em 0 .5em}h1{font-size:2em}h2{font-size:1.8em}h3{font-size:1.5em}h4{font-size:1.3em}strong{font-weight:600}hr{border:none;height:1px;background-color:#e9e7e7}.wrapper{max-width:1200px;margin:10px auto}.img-placeholder img{width:100%;height:100%}.sponsored{font-size:11px;padding-left:16px}.sponsored .taboola-logo{width:12px;height:14px;background:url(//cdn.taboola.com/static/c5/c5ef96bc-30ab-456a-b3d5-a84f367c6a46.svg) no-repeat;background-size:contain;vertical-align:middle;display:inline-block;margin-left:5px}.row{display:flex;flex-wrap:wrap}.row .cell{flex-basis:calc(100% / 4);float:left;padding:1em;position:relative}.row .cell>*>*{display:flex;align-items:center;justify-content:center}.row .cell .article-header{font-weight:700;color:#404040;padding:5px}.row .cell .branding{color:#b8b8b8;padding:0 5px;position:absolute;bottom:-5px}.aspectratio{width:100%;height:0;position:relative}.aspectratio[data-ratio="16:9"]{padding-top:56.25%}.aspectratio[data-ratio="4:3"]{padding-top:75%}.aspectratio>*{position:absolute;top:0;left:0;width:100%;height:100%}@media all and (max-width:700px){.aspectratio{padding-top:0;width:100%}.row .cell{flex-basis:100%;flex-direction:column}.row .cell>*>*{justify-content:left}}`;
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');

        style.type = 'text/css';
        style.innerHTML = css;

        head.appendChild(style);
    }
}
