var listSanPham = [];
sanpham= {dmsp:"",ttsp:"",name:"",priceold:"",price:"",img:"",};
var jsonsp = localStorage.getItem("localsanpham");
if (jsonsp != null)
    listSanPham = JSON.parse(jsonsp)
if (listSanPham == "") {
    var listSanPham = [
        sanpham= {
            dmsp: "Sách giáo khoa",
            ttsp: "Sản phẩm nổi bật",
            name: "Tiếng Việt 1",
            priceold: "",
            price: 89000,
            img: "tiengviet1.jpg",
        },
        sanpham= {
            dmsp: "Sách giáo khoa",
            ttsp: "Sản phẩm nổi bật",
            name: "Tiếng Việt 2",
            priceold: "",
            price: 79000,
            img: "tiengviet2.jpg",
        },
        sanpham= {
            dmsp: "Sách giáo khoa",
            ttsp: "Sản phẩm nổi bật",
            name: "Tiếng Việt 3",
            priceold: "",
            price: 28000,
            img: "tiengviet3.jpg",
        },
        sanpham= {
            dmsp: "Sách giáo khoa",
            ttsp: "Sản phẩm nổi bật",
            name: "Tiếng Việt 4",
            priceold: "",
            price: 29000,
            img: "tiengviet4.jpg",
        },
        sanpham= {
            dmsp: "Sách giáo khoa",
            ttsp: "Sản phẩm nổi bật",
            name: "Tiếng Việt 5",
            priceold: "",
            price: 49000,
            img: "tiengviet5.jpg",
        },
        sanpham= {
            dmsp: "Sách giáo khoa",
            ttsp: "Sản phẩm nổi bật",
            name: "Ngữ Văn 6",
            priceold: "",
            price: 129000,
            img: "nguvan6.jpg",
        },
        sanpham= {
            dmsp: "Sách giáo khoa",
            ttsp: "Sản phẩm nổi bật",
            name: "Ngữ Văn 7",
            priceold: "",
            price: 69000,
            img: "nguvan7.jpg",
        },
        sanpham= {
            dmsp: "Sách giáo khoa",
            ttsp: "Sản phẩm nổi bật",
            name: "Ngữ Văn 8",
            priceold: "",
            price: 18900,
            img: "nguvan8.jpg",
        },
        sanpham= {
            dmsp: "Sách tham khảo",
            ttsp: "Sản phẩm nổi bật",
            name: "Giải Toán 10",
            priceold: "",
            price: 19000,
            img: "giaitoan10.png",
        },
        sanpham={
            dmsp: "Sách tham khảo",
            ttsp: "Sản phẩm nổi bật",
            name: "Giải Ngữ Văn 8",
            priceold: "",
            price:25000,
            img: "giaivan8.jpg",
        },
        sanpham= {
            dmsp: "Sách tham khảo",
            ttsp: "Sản phẩm nổi bật",
            name: "Học và ôn Ngữ Văn nâng cao 9",
            priceold: "",
            price: 30000,
            img: "hoctotnhuvan9.png",
        },
        sanpham= {
            dmsp: "Sách tham khảo",
            ttsp: "Sản phẩm nổi bật",
            name: "Giải bài tập Toán 8",
            priceold: "",
            price: 19000,
            img: "giaitoan8.png",
        },
        sanpham= {
            dmsp: "Sách tham khảo",
            ttsp: "Sản phẩm nổi bật",
            name: "Bộ đề chinh phục chuyên Toán 10",
            priceold: "",
            price: 17000000,
            img: "chinhphuctoan10.jpg",
        },
        sanpham= {
            dmsp: "Sách tham khảo",
            ttsp: "Sản phẩm nổi bật",
            name: "Bồi Dưỡng Học Sinh Giỏi Hóa Học 9",
            priceold: "",
            price: 36000,
            img: "boiduonghoa9.gif",
        },
        //san pham giam gia
        sanpham= {
            dmsp: "Sách tham khảo",
            ttsp: "Sản phẩm nổi bật",
            name: "Bộ đề thi THPT Quốc Gia Tiếng Anh",
            priceold: 79000,
            price: 69000,
            img: "dethitienganh.jpg",
        },
        sanpham= {
            dmsp: "Sách tham khảo",
            ttsp: "Sản phẩm nổi bật",
            name: "Bồi Dưỡng học sinh giỏi Vật Lý 11",
            priceold: 48000,
            price: 30000,
            img: "boiduongly11.jpg",
        },
        sanpham={
            dmsp: "Truyện tranh",
            ttsp: "Sản phẩm nổi bật",
            name: "Truyện Doraemon tập 1",
            priceold: 39000,
            price: 29000,
            img: "truyen_doreamon.jpg",
        },
        sanpham={
            dmsp: "Truyện tranh",
            ttsp: "Sản phẩm nổi bật",
            name: "Thám tử Kindaichi tập 1",
            priceold: 39000,
            price: 29000,
            img: "thamtu1.jpg",
        },
        sanpham= {
            dmsp: "Truyện tranh",
            ttsp: "Sản phẩm nổi bật",
            name: "Truyện Conan tập 1",
            priceold: 39000,
            price: 29000,
            img: "truyen_conan.jfif",
        },
        sanpham= {
            dmsp: "Truyện tranh",
            ttsp: "Sản phẩm nổi bật",
            name: "Hoàng Tử Bé tập 3",
            priceold: 39000,
            price: 32000,
            img: "hoangtube3.jpg",
        },
        sanpham= {
            dmsp: "Truyện tranh",
            ttsp: "Sản phẩm nổi bật",
            name: "POKEMON",
            priceold: 39000,
            price: 29000,
            img: "pokemon.jpg",
        },
        sanpham= {
            dmsp: "Truyện tranh",
            ttsp: "Sản phẩm nổi bật",
            name: "Trạng Quỳnh 314",
            priceold: "",
            price: 39000,
            img: "trangquynh314.jpg",
        },
        sanpham= {
            dmsp: "Truyện tranh",
            ttsp: "Sản phẩm nổi bật",
            name: "Shin - Cậu bé bút chì tập 22",
            priceold: "",
            price: 39000,
            img: "shin22.jpg",
        },
        sanpham= {
            dmsp: "Truyện tranh",
            ttsp: "Sản phẩm nổi bật",
            name: "Truyện cổ tích Việt Nam - Cây Khế",
            priceold: "",
            price: 39000,
            img: "caykhe.jpg",
        },  
    ];
    this.listSanPham.push(sanpham);
    localStorage.setItem("localsanpham", JSON.stringify(this.listSanPham));
}
