'use strict'

module.exports = {

  //identity: 'Sport',
  connection: 'mysql',

  // just allow to set and create attributes defined under 'attributes'
  schema: true,

  attributes: {

    /*
     example: {
     // https://github.com/balderdashy/waterline-docs/blob/master/models.md#data-types-and-attribute-properties
     type: 'string',
     type: 'text',
     type: 'integer',
     type: 'float',
     type: 'date',
     type: 'time',
     type: 'datetime',
     type: 'boolean',
     type: 'binary',
     type: 'array',
     type: 'json',
     type: 'email',
     // https://github.com/balderdashy/waterline-docs/blob/master/models.md#attribute-properties
     defaultsTo: '',
     autoIncrement: true,
     unique: true,
     index: true,
     primaryKey: true,
     enum: ['pending', 'approved', 'denied'],
     size: 24,
     columnName: 'legacy_data_user_name',
     // complete list: https://github.com/balderdashy/waterline-docs/blob/master/models.md#validations
     required: true,
     email: true,
     uuid: true,
     uuidv3: true,
     uuidv4: true,
     url: true
     },
     */

    name: {
      type: 'string',
      unique: true,
      required: true
    },

    courtTermSingular: {
      type: 'string',
      required: true
    },

    courtTermPlural: {
      type: 'string',
      required: true
    },

    slug: {
      type: 'string',
      unique: true,
      required: true
    }

  }
}
