//bu modul circular structure hatası almamızı engeller
const { rejects } = require('assert')
const { error } = require('console')
const flatted = require('flatted')
require('mongoose')

//file sistem modülünü ekliyoruz
const fs = require('fs')
const { resolve } = require('path')

class BaseService {
  constructor(model) {
    this.model = model
    this.filename = model.name
  }
  //service dosyaları kaydeder
  save(objects) {
    return this.model.insertMany(objects)
  }

  //serviceden dosyaları okur
  load() {
    return this.model.find()
  }

  //veritabanına yeni bir obje ekler
  async insert(object) {
    return await this.model.create(object)
  }

  //veritabanından belirtilen indexteki objeyi siler
  async remove(value) {
    return await this.model.findByIdAndRemove(value)
  }

  async update(object) {
    return await thih.model.update(object)
  }

  async find(id) {
    return await this.model.findById(id)

  }

  async query(obj) {
    return this.model.find(obj)
  }

}

module.exports = BaseService