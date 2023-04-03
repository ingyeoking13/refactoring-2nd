// 레코드 캡슐화하기 

const organization = {name: 'acme', country: 'GB'};
let result =''
result += `<h1>${organization.name}</h1>` // 읽기 
organization.name = 'newName' // 쓰기 



// to
// step1 상수 캡슐화
function getRawDataOfOrganization() {
    return organization;
}
result += `<h1>${getRawDataOfOrganization().name}</h1>`
getRawDataOfOrganization().name = 'newName'

// step2 클래스화 

class Organization{
    constructor(data) {
        this._name = data.name
        this._country = data.country
    }

    set name(aString){
        this._data.name = aString
    }

    get name(){
        return this._data.name
    }
}

const organization = new Organization({name: 'acme', country: 'GB'})
function getOrganization() {
    return organization;
}

getOrganization().name = 'newName'
result += `<h1>${getOrganization().name}</h1>`

