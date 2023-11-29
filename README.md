# virtuals-in-mongodb

if we want the field that is not stored in the mongoDB document and those field used for some calculation then we can use virtuals in the schema model

# add virtuals in schema
```javascript
{
    timestamps: true,
    toJSON: {virtuals: true, transform: (doc, ret) => { delete ret.id; }}, // when we use virtual in mongoose model then the mongoose add the id of the document by default. so the transform delete the id that generated using virtuals
  },
```


# toObject in virtuals
```javascript
productSchema.set("toObject", { getters: true }); // when we set toJSON then we can see the virtuals fields in the json response.
// when we print the document in the  console. the the virtual field not show. so if we want the virtual fields show in the console then we add this line 'toObject'
```
