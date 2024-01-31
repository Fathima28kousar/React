import React from "react";
import { motion, useScroll } from "framer-motion";

const Framer = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div className="progress-bar" style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '10px',
        background: 'red',
        transformOrigin: '0%',
        scaleX: scrollYProgress }} />

      <h1>
        <code>useScroll</code> demo
      </h1>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa quam facere eligendi temporibus hic, corrupti tempore vitae quae, voluptate quos eveniet libero fugiat, possimus voluptatum pariatur nisi cumque autem.
      Alias molestias itaque quia id, esse minima nisi aut error exercitationem cumque eaque quae sequi, quis tenetur molestiae dolor sunt voluptates. Necessitatibus, voluptas deleniti eum ea temporibus id non delectus?
      Hic optio aspernatur laudantium facere laboriosam, nostrum numquam reprehenderit pariatur saepe placeat voluptatem at possimus unde eaque alias eligendi. Debitis fuga tempore aut culpa qui eaque consequatur repudiandae quisquam ea?
      Iste odio sunt, quia esse quidem nemo quas expedita nisi. Culpa voluptate doloribus, aspernatur nihil obcaecati commodi repudiandae labore nam animi pariatur distinctio enim, laborum quae ex soluta odio? Voluptates?
      Magni mollitia sunt corrupti optio aliquam similique provident omnis, soluta culpa delectus earum dignissimos, modi quia eos fugiat pariatur, excepturi corporis ea. Assumenda quae accusamus quisquam nisi, architecto nam reiciendis.
      Ipsam suscipit, fugit debitis autem tempore eaque quo, veniam et, reprehenderit minima laudantium fuga tenetur distinctio. Numquam cumque minima dicta, blanditiis beatae assumenda in facere eaque aliquam et corrupti quaerat.
      Corrupti ab id, suscipit eligendi cum illo est vitae fuga accusantium quae, nisi asperiores facere? Assumenda, unde voluptatem at, sequi animi fugit optio libero corporis quia, in magnam repudiandae quam!
      Autem dolorem deleniti suscipit nihil vitae? Eveniet, aliquam dolores, assumenda fuga expedita explicabo quaerat fugiat, adipisci omnis qui a delectus unde provident consequuntur! Animi libero error, distinctio quas suscipit assumenda!
      Praesentium, sapiente similique vel libero aliquam molestiae, atque beatae unde, corporis hic iure consectetur eligendi perferendis corrupti? Deleniti, ipsum reiciendis? Cumque at iste, eos officiis esse quidem officia earum a.
      Sapiente sint dolor odio aspernatur ducimus dolorem possimus commodi consequuntur id dignissimos ab, laborum, dolorum fugit totam neque in sunt dolore iste. Quas, velit? Reiciendis libero mollitia minima minus reprehenderit?</p>
    </>
  );
}

export default Framer;
