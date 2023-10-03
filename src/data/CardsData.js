import shanchilli from '../assets/images/shan-chilli-pickle-1kg.jpg';
const Cardsdata = [
    {
        id: 99,
        category: "CategoryChili",
        rname: "CHILLI SAUCE",
        imgdata: "https://www.dace.vn/wp-content/uploads/2021/07/tuongot.jpg",
        imgdata2: "https://www.dace.vn/wp-content/uploads/2021/07/Chilli-sauce-2-scaled.jpg",
        imgdata3: "https://www.dace.vn/wp-content/uploads/2021/07/Chilli-sauce-3-1024x1024.jpg",
        imgdata4: "https://www.dace.vn/wp-content/uploads/2021/07/Tuong-ot-40-scaled.jpg",
        price: 66,
        qnty: 0,
        description:
            'With the aim of creating Vietnamese-style chili sauce to serve Vietnamese people, DACE chili sauce is made from fresh ripe chillies grown according to organic standards in Cao Bang. Through many stages of testing, the best chili peppers will be selected to combine the traditional secret of natural fermentation with garlic, keeping the spicy, unforgettable aroma.',
        descriptionContent:
            'Pack of 250ml',
        countryOfOrigin: 'Vietnam',
        weight: '250ml',
    },
    {
        id: 100,
        category: "CategoryChili",
        rname: "Shan Chilli Pickle, 1KG",
        imgdata: shanchilli,
        imgdata2: "https://m.media-amazon.com/images/I/81Dx9EpbOzL._AC_SY679_.jpg",
        imgdata3: "https://m.media-amazon.com/images/I/41g0zxDAnHL._AC_.jpg",
        imgdata4: "https://m.media-amazon.com/images/I/31hiHiLm3nL._AC_.jpg",
        price: 30,
        qnty: 0,
        description:
            'Shan Chilli Pickle, prepared with world’s finest green chilies, marinated and prickled with a rich blend of spices is a spicy accompaniment to your favorite meals.',
        descriptionContent:
            'Pack of 1000 grams.',
        countryOfOrigin: 'Pakistan',
        weight: '1 KG',
    },

    {
        id: 101,
        category: "CategoryChili",
        rname: "Shan Chilli Pickle",
        imgdata: "https://www.spicestore.hk/2505-large_default/shan-chilli-pickle.jpg",

        price: 15,
        qnty: 0,
        description:
            "Shan Chilli Pickle, prepared with world’s finest green chilies, marinated and prickled with a rich blend of spices is a spicy accompaniment to your favorite meals.",
        descriptionContent:
            'Pack of 300 grams.',
        countryOfOrigin: 'Pakistan',
        weight: '300 grams',
    },
    {
        id: 102,
        category: "CategoryChili",
        rname: "Red Chili, Crushed",
        imgdata: "https://www.spicestore.hk/1273-large_default/red-pepper-crushed.jpg",

        price: 14,
        qnty: 0,
        description:
            'Crushed red pepper is made from hot dried red peppers and is not made of one type of chili, but from various combinations of ancho, bell, cayenne and other dried red pepper.',
        descriptionContent:
            'Pack of 100 grams.',
        countryOfOrigin: 'Pakistan',
        weight: '100 Grams',
    },
    {
        id: 103,
        category: "CategoryChili",
        rname: "Dipitt Tobasco Sauce",
        imgdata: "https://www.spicestore.hk/3298-large_default/dipitt-tobasco-sauce.jpg",

        price: 14,
        qnty: 0,
        description:
            'Dipitt Tobasco Sauce is made from real chillies. The tobasco sauce is slow cooked in small batches to maintain the artisanal quality of our products. There are no artificial flavours or colours added.',
        descriptionContent:
            'Ingredients: Vinegar, Chili, Salt, Stabilizer (E415).',
        countryOfOrigin: 'Pakistan',
        weight: '100 Grams',
    },
    {
        id: 104,
        category: "CategoryChili",
        rname: "Shan Red Chilli Powder 400 Grams",
        imgdata: "https://www.spicestore.hk/2015-large_default/shan-red-chilli-powder-400-grams.jpg",

        price: 36,
        qnty: 0,
        description:
            'Chilli powder or powdered chili is the ground, dried fruit of one or more varieties of chili pepper, sometimes with the addition of other spices, when it may be known as chili powder or chili powder blend. It is used as a spice to add piquance and flavor to dishes.',
        descriptionContent:
            '',
        countryOfOrigin: 'Pakistan',
        weight: ' 400 Grams',
    },
    {
        id: 105,
        category: "CategoryChili",
        rname: "Everest Kashmirilal Chilli Powder, 100g",
        imgdata: "https://www.spicestore.hk/3481-large_default/everest-kashmirilal-chilli-powder-100g.jpg",

        price: 18,
        qnty: 0,
        description:
            'Fine ground red chillies of the finest quality distinguished by their brilliant red colour and mild pungency.',
        descriptionContent:
            'Chillies are used in Indian dishes for their hot taste and reddish colour. Red chilli ground together with coconut gives curry a firm texture. Chillies are a great source of vitamin C and good for digestion.',
        countryOfOrigin: 'India',
        weight: '100 Grams',
    },
    {
        id: 106,
        category: "CategoryChili",
        rname: "Co-Op Paprika Powder",
        imgdata: "https://www.spicestore.hk/3172-large_default/co-op-paprika-powder.jpg",

        price: 18,
        qnty: 0,
        description:
            'Paprika powder by Co-op. Pack of 46g',
        descriptionContent:
            'Suggestion for Use: Add to paella or goulash for extra depth of flavour.',
        countryOfOrigin: 'France',
        weight: '46g',
    },


    // --------------------- Dữ liệu mẫu---------------
    // {
    //     id: 103,  Mỗi sản phẩm tăng id lên 1 không thêm id trùng nhau
    //     category: "CategoryChili",  Danh mục thêm dữ liệu ví dụ: CategoryChili sẽ chèn dữ liệu vào Chili 
    //     rname: "    ", Tên sản phẩm
    //     imgdata: "    ", Ảnh sản phẩm
    //     imgdata2: "    ", Ảnh thứ 2 sản phẩm
    //     imgdata3: "    ", Ảnh thứ 3 sản phẩm
    //     imgdata4: "    ", Ảnh thứ 4 sản phẩm

    //     price: 20, Giá sản phẩm
    //     qnty: 0,  Số lượng sản phẩm
    //     description: Mô tả mô tả ngắn sản phẩm
    //         '    ',
    //     descriptionContent: Nội dung chính sản phẩm
    //         '    ',
    //     countryOfOrigin: '  ',  Nước sản xuất
    //     weight: '    ',  Cận nặng của sản phẩm
    // },


    // End Category Chilli


    {
        id: 200,
        category: "CategoryGinger",
        rname: "Shan Ginger Powder, 100 Grams",
        imgdata: "https://www.spicestore.hk/3142-large_default/shan-ginger-powder-100-grams.jpg",
      
        price: 20,
        qnty: 0,
        description:
            'Powdered ginger is used in gingerbread, gingersnaps and other sweet snacks. Ginger is also wonderful in tea and hot milk. Powdered ginger is great in Indian spice blends, Chinese stir fry, marinades, pickles, Japanese rice dishes, mulled wine and vegetable stews.',
        descriptionContent:
            'Pack of 46 grams.',
        countryOfOrigin: 'Pakistan',
        weight: '100 Grams',
    },


    // End Category Ginger

    {
        id: 300,
        category: "CategoryTurmeric",
        rname: "Shan Turmeric Powder 100 Grams",
        imgdata: "https://www.spicestore.hk/2019-large_default/shan-turmeric-powder-100-grams.jpg",
      
        price: 20,
        qnty: 0,
        description:
            'Turmeric grows wild in the forests of South and Southeast Asia. Its powder has become the key ingredient for many Indian, Pakistani and Thai dishes such as in curry and many more.',
        descriptionContent:
            'Pack of 100 grams.',
        countryOfOrigin: 'Pakistan',
        weight: '100 Grams',
    },


    // --------------------- Dữ liệu mẫu---------------
    // {
    //     id: 301,  Mỗi sản phẩm tăng id lên 1 không thêm id trùng nhau
    //     category: "CategoryTurmeric",  Danh mục thêm dữ liệu ví dụ: CategoryTurmeric sẽ chèn dữ liệu vào Turmeric 
    //     rname: "    ", Tên sản phẩm
    //     imgdata: "    ", Ảnh sản phẩm
    //     imgdata2: "    ", Ảnh thứ 2 sản phẩm
    //     imgdata3: "    ", Ảnh thứ 3 sản phẩm
    //     imgdata4: "    ", Ảnh thứ 4 sản phẩm

    //     price: 20, Giá sản phẩm
    //     qnty: 0,  Số lượng sản phẩm
    //     description: Mô tả mô tả ngắn sản phẩm
    //         '    ',
    //     descriptionContent: Nội dung chính sản phẩm
    //         '    ',
    //     countryOfOrigin: '  ',  Nước sản xuất
    //     weight: '    ',  Cận nặng của sản phẩm
    // },







    // End Category Turmeric

    {
        id: 400,
        category: "CategoryLemongrass",
        rname: "Lemongrass Powder",
        imgdata: "https://www.spicestore.hk/1393-large_default/lemongrass-powder.jpg",
     
        price: 14,
        qnty: 0,
        description:
            'Lemongrass is a wonderful herb used in Asian cooking as a flavoring agent in teas and drinks or cordials. Due to its citrus flavor, it can be used in variety of recipes -- pack of 100 grams.',
        descriptionContent:
            'Pack of 100 grams.',
        countryOfOrigin: 'USA',
        weight: '100 Grams',
    },


    // End Category CategoryLemongrass

    {
        id: 500,
        category: "CategoryGarlic",
        rname: "Shan Garlic Pickle",
        imgdata: "https://www.spicestore.hk/2919-large_default/shan-garlic-pickle.jpg",
      
        price: 20,
        qnty: 0,
        description:
            'Shan Garlic Pickle, prepared with world’s finest garlic, marinated and prickled with a rich blend of spices is a zesty accompaniment to your favorite meals.',
        descriptionContent:
            'Pack of 300 grams.',
        countryOfOrigin: 'Pakistan',
        weight: '300 grams',
    },


    // End Category CategoryGarlic

    {
        id: 600,
        category: "CategoryCassiaCinnamon",
        rname: "Pride Of Asia Saigon Cinnamon Powder, Authentic Single Ingredient Premium Spice Sourced in Saigon Vietnam | Gluten Free | Kosher | 2.0 oz. Tin, 1-Count",
        imgdata: "https://m.media-amazon.com/images/I/7138GA4Q19L._SX679_.jpg",
       
        price: 10,
        qnty: 0,
        description:
            'Origine of Saigon cinnamon Saigon cinnamon, also known as Vietnamese cinnamon or Cinnamomum loureiroi, is a type of cinnamon that is native to Vietnam. It is considered to be one of the highest quality cinnamon varieties in the world and is known for its strong, sweet, and spicy flavor.',
        descriptionContent:
            'Pack of 100 grams.',
        countryOfOrigin: 'Vietnam',
        weight: '100 grams',
    },


    // End Category CategoryCassiaCinnamon

    {
        id: 700,
        category: "CategoryStarAnise",
        rname: "Star Anise (Anasphal), 100g",
        imgdata: "https://www.spicestore.hk/1392-large_default/anise-star-anasphal.jpg",
      
        price: 21,
        qnty: 0,
        description:
            'Illicium verum, commonly called star anise, star aniseed, or Chinese star anise is a spice that closely resembles anise in flavor -- pack of 100 grams',
        descriptionContent:
            'Pack of 100 grams.',
        countryOfOrigin: 'USA',
        weight: '100 Grams',
    },


    // End Category CategoryStarAnise





  
   
   
];

export default Cardsdata;