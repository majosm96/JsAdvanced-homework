//Homework

/**
 * @description Constructor to create new gallery(slider)
 * @class Gallery
 * @param {object} galleryConfig
 * @constructor
 */

var Gallery = function (galleryConfig){
    this.img = galleryConfig.img;
    this.srcArray = galleryConfig.srcArray;
    this.imgAmount = galleryConfig.srcArray.length-1;
    this.index = 0;
    this.nextBtn = document.getElementById('next');
    this.backBtn = document.getElementById('back');
};


/**
 * @description Constructor methods 
 */

Gallery.prototype = {

    constructor: Gallery,

    /** @function
     * @name init */
    init: function(){
        //
        //New reference, create a new property self 
        this.nextBtn.self = this;
        this.backBtn.self = this;

        //Events
        this.nextBtn.addEventListener('click', this.forWard);
        this.backBtn.addEventListener('click', this.backWard);
    },

    /** @function
     * @name backWard */
    backWard: function(){
        
        this.self.index--;

        if (this.self.index < 0) {
            this.self.index = this.self.imgAmount;
        }
            
        this.self.img.src = this.self.srcArray[this.self.index];

    },

    /** @function
     * @name forWard */
    forWard: function(){

        this.self.index++;

        if (this.self.index > this.self.imgAmount) {
            this.self.index = 0;
        }
        
        this.self.img.src = this.self.srcArray[this.self.index];
    }
}

