let adminshowlichsu = document.getElementById("adminshowlichsu");
let doanhthu = document.getElementById("doanhthu");
window.onload = displayuser(listUser)
function displayuser(listUser){
    ArrayBanHang = JSON.parse(localStorage.getItem("localbanhang"))

    console.log(ArrayBanHang);
    
  let show ="";
  var danhthu=0;
  for (var i = 0; i < ArrayBanHang.length; i++) {
    danhthu+=parseInt(ArrayBanHang[i].tt);
    show+= `<tr>                         
  <td><p class='text-center'>${(i+1)}</p></td>
  <td><p class='text-center'>${ArrayBanHang[i].name}</p></td>
  <td><p class='text-center'>${ArrayBanHang[i].hd}</p></td>
  <td><p class='text-center'>${ArrayBanHang[i].tt} </p></td>
  <td><p class='text-center'>${ArrayBanHang[i].thoigian} </p></td>
  </tr> `
  }

  adminshowlichsu.innerHTML=show;
  doanhthu.innerHTML=danhthu+"đ";
}