 import Image from "next/image"
 import Card from "@/Components/Card"


export default function Education(){

    return(
        <div>
           <div>
              <h1>pre primary</h1>
              <div>
                <Image src="/profile.jpg" alt="" height={20} width={20} />
                <h1>UEMS</h1>
                <p>2006-2003</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, corrupti!</p>
              </div>
           </div>
           <div>
              <h1>Secondary</h1>
              <div>
                  <Image src="/Resume.png" alt="" height={20} width={20} />
                <h1>VVA</h1>
                <p>2006-2003</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, corrupti!</p>
              </div>
           </div>
           <div>
              <h1>High school</h1>
              <div>
                 <Image src="/profile.jpg" alt="" height={20} width={20} />
                <h1>Dss</h1>
                <p>2006-2003</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, corrupti!</p>
              </div>
           </div>
            <div>
              <h1>Bachlor</h1>
              <div>
                <Image src="/profile.jpg" alt="" height={20} width={20} />
                <h1>MMC</h1>
                <p>2006-2003</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, corrupti!</p>
              </div>
           </div>











         {/* testing */}

           <div>
              <h1>Bachlor</h1>
              <div>
                <Image src="/Resume.png" alt="" height={20} width={20} />
                <h1>MMC</h1>
                <p>2006-2003</p>
                <Card/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, corrupti!</p>
              </div>
           </div>
        </div>
        )
}