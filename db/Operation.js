const Products = require("../db/schema/products");

const object = {
  title: "Sony MDR-ZX310APBCE Wired Headset with Mic  (Black, Over the Ear)",
  price: 899,
  discount: 0,
  images: [
    { url: "First Image" },
    { url: "Second Image" },
    { url: "Third Image" }
  ],
  rating: [{ rate: 5 }, { rate: 3 }],
  availability: [{ pincode: 110093 }, { pincode: 110095 }],
  description:
    "Just plug in these over-the-head headphones and enjoy listening to music in high clarity wherever you are, and whenever you want. With these headphones in your bag, you can go places without feeling bored as these headphones deliver great music quality.",
  specification: `Model Name
  MDR-ZX310APBCE
  Color
  Black
  Headphone Type
  Over the Ear
  Inline Remote
  Yes
  Sales Package
  1 Headset
  Connectivity
  Wired`,
  reviews: [
    {
      name: "Arbaz Tyagi",
      title: "Awesome Product",
      note:
        "This was for dad ! He enjoys this product ~ satisfaction of seeing father happy ~ priceless"
    },
    {
      name: "Arbaz Tyagi",
      title: "Awesome Product",
      note:
        "This was for dad ! He enjoys this product ~ satisfaction of seeing father happy ~ priceless"
    },
    {
      name: "Arbaz Tyagi",
      title: "Awesome Product",
      note:
        "This was for dad ! He enjoys this product ~ satisfaction of seeing father happy ~ priceless"
    }
  ],
  menu: "Men",
  submenu: "Headphone",
  trusted: true,
  active: true,
  clicked: 0,
  purchased: 0
};

Products.findOne((err, doc) => {
  if (err) {
    console.log("Error in founding docs");
  } else {
    if (object.menu == "Men") {
      doc.Men.push(object);
      doc.save(() => {
        console.log("Product Added Successfully!!!!!");
      });
    } else {
      console.log("Category not found");
    }
  }
});
