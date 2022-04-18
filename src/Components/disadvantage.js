import React from "react";
import Swipper from "./swipper";

const randomTxt =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const createData = (title, desc, img) => {
  return {
    title: title,
    desc: desc,
    img: img,
  };
};

const data = [
  createData(
    "Би бол дотогшоо хүн",
    "Би өмнө нь хэдхэн хүнээс цааш харилцдаггүй байсан тул олон хүнтэй ярилцахдхх дургүй мөн чаддаггүй байсан. Иймээс миний харилцах чадвар бусадтай харьцуулахад муухан",
    "introvert.jpg"
  ),
  createData(
    "Би удаан цагаар юмс уншиж чаддаггүй",
    "Удаан цагаар юмс уншихад анхаарал уншсан юм толгойд орохгүй эсвэл хараа тогтож өгдөггүй тул 1-2 цаг уншаад 30 минут завсарлага авж байдаг",
    "bookRead.png"
  ),
  createData(
    "I have high focus",
    "Анхаарлаа төвлөрөөд хийх ёстой зүйлсээ хийхэд 4-5 цаг сууж хийж чадагч үүнээс болоод зарим ойройдоо хийх зүйлс алдагдах явдал байдаг",
    "focus.jpg"
  ),
  createData(
    "Би зүйлсийг тодорхой нэршлээр бус утгаар нь цээжилдэг",
    "Яагаад энэ сул тал вэ гэхээр ерөнхий зүйлд асуудал болохгүй ч нарийн зүйлсэд дандаа ухаж харах болдог",
    "talk.png"
  ),
];

function disadvantage() {
  return (
    <div className="mt-3">
      <Swipper datas={data} />
    </div>
  );
}

export default disadvantage;
