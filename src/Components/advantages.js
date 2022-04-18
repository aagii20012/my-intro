import React from "react";
import Swipper from "./swipper";

const createData = (title, desc, img) => {
  return {
    title: title,
    desc: desc,
    img: img,
  };
};

const data = [
  createData(
    "Би хурдацтай сурдаг",
    "Би зарим нэгэн зүйлсийг хурдан суралцаж байсан. Би React,Node,Laravel,Ruby on rails гэх мэтийг мэдэж авсан. Магадгүй Boostrap,material ui гэх мэт framework-ийг сурах нь л удаан байгаа. Магадгүй CSS сайн мэдэхгүй болохоор тэр байх",
    "learn.jpg"
  ),
  createData(
    "Өөрийн сул талуудаа сайжруулж байгаа",
    "Өөрийн зарим нэгэн муу талуудаа мэдэж авсан тул засахаар ордон жижиг зөв зуршил өөртөө суурьшуулахаар оролдож байгаа",
    "keepTry.png"
  ),
  createData("Би өндөр төвлөрөлтэй", "Би өөрийн хийж буй зүйлдээ төвлөрвөл 4-5 цаг сууж байж чаддаг", "focus.jpg"),
  createData(
    "Би асуудалийг шийдэж чаддаг",
    "Надад олон тооны программийн алдаа гарж байсан эдгээрийн 60% өөрөө шийдэж чаддаг. Би асуудал шийдэхдээ процессийг төсөөлөн даган утга зөв буйг шалгаж байгаа тул хялбар байдаг",
    "bug.jpg"
  ),
  createData(
    "Өөртөө зөв дадал болон зан ариншинг суулгахаар оролдож байга",
    "Заримдаа  motivation эсвэл inspiration өгөх бичлэг үздэг болхоор. Надад хамгийн их нөлөөлсөн хүн бол Jordan Peterson юм. Энэхүү хүний олон ярилцлаг сонсож байсан. Өөрийгөө сайжруулах үйл ажилгаа алхам алхамаар хийж байгаа. ",
    "peter.jpg"
  ),
];

function advantage() {
  return (
    <div className="mt-3">
      <Swipper datas={data} />
    </div>
  );
}

export default advantage;
