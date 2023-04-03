import { SampleProvinceData } from "./data"
import { Producer } from "./Producer"
import { Province } from "./Province"
import { IProducer } from "./types"

// https://jojoldu.tistory.com/611

describe('province', ()=> {
    it('shortfall', () => {
        const asia = new Province(SampleProvinceData() as Province) // multiple fixture
        expect(asia.shortfall).toEqual(5);
    })

    it('profit', ()=>{
        const asia = new Province(SampleProvinceData() as Province)
        expect(asia.profit).toEqual(230);
    })

})

describe('province with fixture', ()=> {
    let asia: Province = new Province(SampleProvinceData() as Province);

    beforeEach(()=>{
        asia = new Province(SampleProvinceData() as Province)
    })

    it('shortfall', () => {
        expect(asia.shortfall).toEqual(5);
    })

    it('profit', ()=>{
        expect(asia.profit).toEqual(230);
    })

    it('change production', ()=>{
        asia.producers[0].production = 20;
        expect(asia.shortfall).toEqual(-6);
        expect(asia.profit).toEqual(292);
    })
})


describe('no producers',()=>{
    let noProducers : Province;
    let asia: Province;
    
    beforeEach(()=>{
        const data ={
            name: 'No Producers',
            producers: [],
            demand: 30,
            price: 20
        }
        noProducers = new Province(data as unknown as Province);
        asia = new Province(SampleProvinceData() as Province)
    })

    it('shortfall', () =>{
        expect(noProducers.shortfall).toEqual(30);
    })

    it('profit',()=>{
        expect(noProducers.profit).toEqual(0);
    })

    it('zero demand', () =>{
        asia.demand = 0;
        expect(asia.shortfall).toEqual(-25);
        expect(asia.profit).toEqual(0);
    })

    it('negative demand', () =>{
        asia.demand = -1;
        expect(asia.demand).toBeNaN()
        expect(asia.shortfall).toBeNaN()
        expect(asia.profit).toBeNaN()
    })

})