import Image from 'next/image';

export default function Home() {
   return (
      <div className='page'>
         <header >
            <h1 >
               הצטרפו לנבחרת
            </h1>
            <h2 >
               אנחנו פותחים את דלתנו ומצרפים עורכי דין עם שאיפות להתמקצע בתביעות רשלנות רפואית
            </h2>
         </header>

         <main >
            <section className='moderator'>
               <h2>מנחה הקורס</h2>
               <div className='details' >
                  <div className="img">
                     <Image
                        src="/Nechami.jpg"
                        alt="עו״ד נחמי וולק"
                        width={250}
                        height={250}
                        priority
                     />
                  </div>
                  <div className='content'>
                     <h3 >עו״ד נחמי מייזליש וולק</h3>
                     <h5 >שותפה וראשת מחלקת דיני נזיקין במשרד</h5>
                     <h6>הדד, רוט, שנהר ושות׳ - משרד עורכי דין</h6>
                     <a
                        href="https://har.law/har_lawyers/%d7%a0%d7%97%d7%9e%d7%99-%d7%9e%d7%99%d7%99%d7%96%d7%9c%d7%99%d7%a9-%d7%95%d7%95%d7%9c%d7%a7/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        למידע נוסף
                     </a>
                  </div>
               </div>
            </section>

            <section className='agenda'>
               <h2>לוח זמנים</h2>
               <h3>חמישה מפגשים בימי שלישי</h3>
               <h3>17:30 - 20:15</h3>
               <ul>
                  <li >
                     <b>
                        מפגש ראשון:
                     </b>
                     <p>תאריך יפורסם בהמשך</p>
                  </li>
                  <li >
                     <b>
                        מפגש שני:
                     </b>
                     <p>תאריך יפורסם בהמשך</p>
                  </li>
                  <li >
                     <b>
                        מפגש שלישי:
                     </b>
                     <p>תאריך יפורסם בהמשך</p>
                  </li>
                  <li >
                     <b>
                        מפגש רביעי:
                     </b>
                     <p>תאריך יפורסם בהמשך</p>
                  </li>
                  <li >
                     <b>
                        מפגש חמישי:
                     </b>
                     <p>תאריך יפורסם בהמשך</p>
                  </li>
               </ul>
            </section>

            <section >
               <h2>עלות הקורס</h2>
               <div >
                  <div >
                     <h3>מחיר רגיל</h3>
                     <p>1,900 ₪</p>
                     <span>+ מע״מ</span>
                  </div>
                  <div >
                     <div >הרשמה מוקדמת</div>
                     <h3>הרשמה מוקדמת</h3>
                     <p>1,450 ₪</p>
                     <span>+ מע״מ</span>
                  </div>
               </div>
               <p >התשלום אפשרי רק באמצעות העברה בנקאית למשרד</p>
            </section>

            <section >
               <h2>תנאי קבלה</h2>
               <p>
                  הקורס מיועד לעורכי דין חדשים (עד 5 שנים) המעוניינים להתמחות בתחום הרשלנות הרפואית.
               </p>
            </section>

            <section>
               <h2>מיקום</h2>
               <p>
                  המפגשים יתקיימו במשרדנו ברחוב דוד המלך 2, תל אביב, קומה 22
               </p>
            </section>

            <section >
               <h2>מדיניות הקורס</h2>
               <ul>
                  <li>הקורס יכיל עד 12 משתתפים</li>
                  <li>מי שלא יוכל להגיע למפגש יהיה זכאי להשתתף באותו מפגש בקורס הבא</li>
                  <li>ניתן לבטל הרשמה עד חודש לפני תחילת הקורס</li>
                  <li>ההשתתפות מותנית בהסכמת המשרד ועשויה להתבטל בכל שלב</li>
                  <li>הקבלה מותנית במענה על שאלון וראיון עם עו״ד נחמי</li>
               </ul>
            </section>

            <section>
               <h2>פרטיות</h2>
               <p>המשרד מתחייב לא לסחור במידע האישי של הנרשמים.</p>
            </section>
         </main>

         <footer>
         </footer>
      </div>
   );
}
