import Image from "next/image";

export default function PrimaryButton({title}) {
    return (
      <>
        <div className="primary-button">
          
          {/* Dynamic Icon  */}
          {/* <Image
              src={}
              width={}
              height={}
              alt={}
          /> */}

          {/* Dynamic content  */}
         {title}
      </div>
    </>
  );
}