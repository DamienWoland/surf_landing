class Slider {
    constructor(data) {
        this._index = 0;
        this._data = data;
    }

    next() {
        if (this._index === this._data.products.length - 1) {
            this._index = 0;
        } else {
            this._index++;
        }

        this.render();
    }

    prev() {
        if (this._index === 0) {
            this._index = this._data.products.length - 1;
        } else {
            this._index--;
        }

        this.render();
    }

    tabs(){
        let tabs = document.getElementsByClassName("surfboard__description-tabs-content-item");
        console.log(tabs);    
        ...tabs.forEach(function(){
            console.log(this)
        })
    }

    render() {
        const titleEl = document.getElementById("title"),
            descriptionEl = document.getElementById("description"),
            countSlide = document.getElementById("surfboard__counter"),
            priceEl = document.getElementsByClassName("surfboard__price-numbers")[0],
            previewEl = document.querySelector('.surfboard__preview-item img'),
            sliderEl = document.querySelector('.surfboard__preview-slider'),
            { products } = this._data,
            {name, description, price, url, allImages = []} = products[this._index];

        Array.from(sliderEl.children).forEach(item => item.remove());

        sliderEl.innerHTML = allImages.map(imgSrc => `
            <div class="surfboard__preview-slider-item">
                <img src="${imgSrc}"
                    alt="">
            </div>
        `).join('');

        titleEl.innerHTML = name;
        descriptionEl.innerHTML = description;
        priceEl.innerHTML = price;
        previewEl.src = url;
        countSlide.innerHTML = `${this._index + 1}/${products.length}`;
    }
}

export default Slider;


