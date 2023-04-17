function setDimension(name, value) {
    if (name == 'heigt') {
        this._height = value;
        return;
    }
    if (name == 'witdh') {
        this._width = value;
        return;
    }
}


function setHeight(value) {
    this._height = value;
}

function setWidth(value){
    this._width = value;
}

