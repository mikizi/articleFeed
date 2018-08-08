export default class Taboola {
    constructor() {
        this.taboolaApi = 'http://api.taboola.com';
        this.protocolVersion = '1.1';
        this.format = 'json';
        this.publisherId = 'taboola-templates';
        this.methodName = 'recommendations.get';
        this.appType = 'desktop';
        this.appkey = 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4';
        this.ResCount = '8';
        this.sourceTyp = 'text';
        this.sourceId = 'demo';
        this.userSession = 'init';
        this.sourceUrl = 'http://test.com';

        this.showSponserd = true;
        this.ratio = '16:9'; //16:9 , 4:3

        this.data = {};
        this.grid = '';

        this.restApiUrl = `${this.taboolaApi}/${this.protocolVersion}/${this.format}/${this.publisherId}/${this.methodName};`;
        this.params = `?app.type=${this.appType}&app.apikey=${this.appkey}&rec.count=${this.ResCount}&source.type=${this.sourceTyp}&source.id=${this.sourceId}&user.session=${this.userSession}&source.url=${this.sourceUrl}`;
    }

    // Async/Await requirements: Latest Chrome/FF browser or Babel: https://babeljs.io/docs/plugins/transform-async-to-generator/
    // Fetch requirements: Latest Chrome/FF browser or Github fetch polyfill: https://github.com/github/fetch

    // async function
    async fetchAsync() {
        // await response of fetch call
        let response = await fetch(this.restApiUrl + this.params);
        // only proceed once promise is resolved
        return await response.json();
    }

    setData(data) {
        this.data = data.list;
        console.log(this.data);
    }

    Create(data) {
        this.setData(data);
        this.buildGrid();
        const element = document.querySelector('.content');
        if (!element) {
            return 'Error! no parent element';
        }
        element.innerHTML = this.grid;
        return 'create Taboola Successfully!';
    }

    buildGrid() {
        const delimiter = '<hr/>';
        const sponsoredComponent = '<div class="sponsored">Sponsored Links by Taboola<div class="taboola-logo"></div></div>';
        const comp = this.buildComponents();
        const componentsWrp = `<div class=" row">${comp}</div>`;

        let childes = [this.showSponserd ? sponsoredComponent : '', componentsWrp, delimiter].join(' ');
        this.grid = `<div class="wrapper">${childes}</div>`;

        return this.grid;
    }

    buildComponents() {
        return this.data.map(item => {
            return `<div class="cell">
            <a target="_blank" href="${item.url}" >
                <div class="aspectratio" data-ratio="${this.ratio}">
                    ${this.getComponent(item)}
                </div>
                <div class="article-header">${item.name}</div>
            </a>
            <a href="#" class="branding" target="_blank">${item.branding}</a>
        </div>`;
        }).join(' ');
    }
    getComponent(item){
        switch(item.type){
            //for future development
            //case 'video'
            //case 'image'
            //case '???'
            default:
                return this.imageComponent(item.thumbnail, item.name)
        }
    }

    imageComponent(imageSrc, alt) {
        if (!imageSrc || imageSrc.length === 0 || !imageSrc[0].url)
            return ''; //if src not exist or empty

        const image = imageSrc[0].url;
        return `<div class="img-placeholder">
                    <img src="${image}" alt="${alt}"/>
                </div>`;
    }
    // for future using video component - beta version - need some custom fix after we will know data structure
    videoComponent(videoSrc) {
        if (!videoSrc || videoSrc.length === 0 || !videoSrc[0].url)
            return ''; //if src not exist or empty

        const video = videoSrc[0].url;
        return `<video width="100%" controls>
                  <source src="${video}" type="video/mp4">
                  Your browser does not support HTML5 video.
                </video>`;
    }
}
