//bu modul circular structure hatası almamızı engeller
const flatted = require('flatted')

//file sistem modülünü ekliyoruz
const fs = require('fs')

class BaseDatabase{
    constructor(model) {
        this.model = model
        this.filename = model.name
    }
    //database dosyaları kaydeder
save(objects){
    //dosya ismine göre json dosyası oluşturur ve objeleri string olarak kaydeder
    fs.writeFileSync(`${this.filename}.json`, flatted.stringify(objects,null,2))
}

//databaseden dosyaları okur
load() {
    const file = fs.readFileSync(`./${this.filename}.json`)
    const objects = flatted.parse(file)

    return objects.map(this.model.create)
}

//veritabanına yeni bir obje ekler
insert(object) {
    const objects = this.load()
    this.save(objects.concat(object))
}
//veritabanından belirtilen indexteki objeyi siler
remove(index) {
    const objects = this.load()

    object.splice(index,1)
    this.save(objects)
}
update(object) {
    const objects = this.load()

    const index = objects.findIndex(o => o.id == object.id)

    // if (index == -1) throw new Error(`Cannot find ${this.model.name} instance with id ${object.id}`)

    objects.splice(index, 1, object)
    this.save(objects)
}
findBy(property, value) {
    return this.load().find(o => o[property] == value)
  }
}

module.exports = BaseDatabase