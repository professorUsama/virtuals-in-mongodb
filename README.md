# virtuals-in-mongodb

if we want the field that is not stored in the mongoDB document and those field used for some calculation then we can use virtuals in the schema model

# add virtuals in schema
```javascript
{
    timestamps: true,
    toJSON: {virtuals: true, transform: (doc, ret) => { delete ret.id; }},
  },
```
when we use virtual in mongoose model then the mongoose add the id of the document by default. so the transform delete the id that generated using virtuals


# toObject in virtuals
```javascript
productSchema.set("toObject", { getters: true });
```
when we set toJSON then we can see the virtuals fields in the json response.
when we print the document in the  console. the the virtual field not show. so if we want the virtual fields show in the console then we add this line 'toObject'

# apis routes
- localhost:6001/api/v1/product/addproduct
- localhost:6001/api/v1/product/get-products
- localhost:6001/api/v1/review/post-review?type=review
- localhost:6001/api/v1/review/get-reviews/?id=656670e8b520923519e1ec09


# Quotation
we cannot use virtuals with aggregation or may be difficult to use. Because
- Arguments are not cast to the model's schema because $project operators allow redefining the "shape" of the documents at any stage of the pipeline, which may leave documents in an incompatible format.

- The documents returned are plain javascript objects, not mongoose documents (since any shape of document can be returned).
