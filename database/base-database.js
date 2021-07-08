//bu modul circular structure hatası almamızı engeller
const { rejects } = require('assert')
const { error } = require('console')
const flatted = require('flatted')

//file sistem modülünü ekliyoruz
const fs = require('fs')
const { resolve } = require('path')

class BaseDatabase{
    constructor(model) {
        this.model = model
        this.filename = model.name
    }
    //database dosyaları kaydeder
save(objects){
    //dosya ismine göre json dosyası oluşturur ve objeleri string olarak kaydeder
    return new Promise((resolve, reject) => {
        fs.writeFile(`${this.filename}.json`, flatted.stringify(objects,null,2), (error) =>{
            if(error) return reject(error)
            
            resolve()
        })
    })
    
}

//databaseden dosyaları okur
load() {
    return new Promise((resolve, reject) => {
        fs.readFile(`./${this.filename}.json`, (error, file) => {
            if(error) return reject(error)

            const objects = flatted.parse(file)

            resolve(objects.map(this.model.create))
        })
    })
}

//veritabanına yeni bir obje ekler
async insert(object) {
  
    const objects = await this.load()
    return this.save(objects.concat(object))
}
//veritabanından belirtilen indexteki objeyi siler
async remove(index) {
    const objects = await this.load()

    object.splice(index,1)
    return this.save(objects)
}


async update(object) {
    const objects = await this.load()

    const index = objects.findIndex(o => o.id == object.id)

    objects.splice(index, 1, object)
    return this.save(objects)
}

async findBy(property, value) {
    return (await this.load()).find(o => o[property] == value)
    
  }
  
}

module.exports = BaseDatabase