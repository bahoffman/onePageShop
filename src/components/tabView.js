import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

const TabView = () => (
  <Tabs>
    <TabList>
      <Tab>About</Tab>
      <Tab>Description</Tab>
      <Tab>Use</Tab>
      <Tab>Benefits</Tab>
      <Tab>Incgredients</Tab>
    </TabList>

    <TabPanel>
      <ul>
        <li>
          NUMBER 1 EXFOLIATOR IN JAPAN: Cure Natural Aqua Gel is the #1
          exfoliator in Japan, selling 1 bottle every 12 seconds. Cure's status
          as a cult hit and Japanese beauty product legend stems from the simple
          fact that Cure does what it promises: exfoliates gently and
          effectively, without any harsh chemicals.{" "}
        </li>
        <li>
          ACTIVATED HYDROGEN WATER FORMULA: General chemical peeling use strong
          acids (approx. pH1.3) to dissolve protein. Natural Aqua Gel Cure, on
          the other hand, gently catches waste dead skin on the surface of the
          skin and removes it with a unique activated hydrogen water formula.
        </li>
        <li>
          GENTLE & EFFECTIVE: Cure Natural Aqua Gel exfoliates your skin gently
          and effectively. There is no need to rub or scrub your skin too hard.
          Its unique and gentle formula is suitable to all skin types, even the
          most sensitive. You will be surprised that your skin is so much
          smoother! TRY IT ON YOUR BODY: Cure Natural Aqua Gel can also be used
          on your hands, neck, low-neck, elbows, heels, etc. A bottle shall last
          approximately four months if used for the entire body.{" "}
        </li>
        <li>
          PRESERVATIVE-FREE: Made in Japan, Natural Aqua Gel Cure is a very
          simple product as approximately 91% of it, is water. This gentle
          exfoliant gel is also scent-free, color-free, and preservative-free.
        </li>
      </ul>
    </TabPanel>
    <TabPanel>
      <p>
        Cure Natural Aqua Gel is the #1 exfoliator in Japan, selling 1 bottle
        every 12 seconds. Cure's status as a cult hit and Japanese beauty
        product legend stems from the simple fact that Cure does what it
        promises: exfoliates gently and effectively, without any harsh
        chemicals. There is no need to rub or scrub your skin too hard. Its
        unique and gentle formula is suitable to all skin types, even the most
        sensitive. You will be surprised that your skin is so much smoother!
        Made in Japan, Natural Aqua Gel Cure is a very simple product as
        approximately 91% of it, is water. General chemical peelings usually use
        strong acids (approx. pH1.3) to dissolve protein. Natural Aqua Gel Cure,
        on the other hand, gently catches waste dead skin on the surface of the
        skin and removes it with a unique activated hydrogen water formula. This
        gentle exfoliant gel is also scent-free, color-free, and
        preservative-free.{" "}
      </p>
    </TabPanel>
    <TabPanel>
      <p>
        Wash face thoroughly with soap and water. Dry face well. Pump the bottle
        3 to 5 times until you have an appropriate amount of gel on your finger.
        Apply the gel to the skin on your face, neck, or other areas that are
        dry and rough. Gently massage when the gel becomes white (do not rub
        skin too hard). Rinse well after you see results. Use lotion or skin
        cream that you normally use. For best results, apply twice a week.
      </p>
    </TabPanel>
    <TabPanel>
      <ul>
        <li style={{ margin: "0 0" }}>* Suitable for all skin types </li>
        <li style={{ margin: "0 0" }}>* Can be used on all your body</li>
        <li style={{ margin: "0 0" }}>* Can be applied on sensitive skin</li>
        <li style={{ margin: "0 0" }}>* Gentle & effective </li>
        <li style={{ margin: "0 0" }}>* Activated hydrogen water formula.</li>
        <li style={{ margin: "0 0" }}>* Number 1 exfoliator in Japan</li>
        <li style={{ margin: "0 0" }}>
          * 91% of Cure Natural Aqua Gel is water
        </li>
        <li style={{ margin: "0 0" }}>
          * Scent-free, color-free, and preservative-free{" "}
        </li>
      </ul>
    </TabPanel>
    <TabPanel>
      <h2>Any content 5</h2>
    </TabPanel>
  </Tabs>
)

export default TabView
