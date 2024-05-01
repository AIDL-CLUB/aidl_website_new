import React from 'react';
import Expt1Image from '../components/images/Expt1.png'; 
import Expt2Image from '../components/images/Expt2.jpg'; 
import Expt3Image from '../components/images/Expt3.png'; 
import Expt4Image from '../components/images/Expt4.png'; 
import Expt5Image from '../components/images/Expt5.png'; 
import Expt6Image from '../components/images/Expt6Image.png';
import Expt7Image from '../components/images/Expt7Image.png';
import Expt8Image from '../components/images/Expt8Image.png';
import Expt9Image from '../components/images/Expt9Image.png';

function Card({ title, description, imageSrc, descriptionUrl, exampleUrl }) {
  const handleClick = (event) => {
    event.stopPropagation();
    // Add any other handling logic if needed
  };

  return (
    <div className="group relative cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30" onClick={handleClick}>
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 " src={imageSrc} alt={title} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">{title}</h1>
        {description && <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{description}</p>}
        <h1 className="font-dmserif text-2xl font-bold text-white">Learn More</h1>
        <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
          <a className="text-white" href={descriptionUrl}>Description</a>
        </button>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
          <a className="text-white" href={exampleUrl}>Example</a>
        </button>
      </div>
    </div>
  );
}

function Expt() {
  return (
    <div id="EXPERIMENTS" className="container mx-auto">
      <div className="mt-0 justify-items-center gap-1 justify-items-center pt-10 text-gray-400 text-sm pb-8 sm:ml-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 font-normal text-white text-sm pb-4">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white pt-10 mt-10">
          EXPERIMENTS
        </p>
      </div>
      <br />
      <div className="flex justify-center items-center bg-gray-900 pl-4 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <Card 
            title="K Means" 
            description="K-means is a centroid-based algorithm, or a distance-based algorithm, where we calculate the distances to assign a point to a cluster." 
            imageSrc={Expt1Image}
            descriptionUrl="https://medium.com/analytics-vidhya/to-start-with-k-means-clustering-1c6ee3cb840f"
            exampleUrl="your_example_url_here"
          />
          <Card 
            title="Random Forest" 
            description="Random forest is a commonly-used machine learning algorithm, that combines the output of multiple decision trees to reach a single result." 
            imageSrc={Expt2Image}
            descriptionUrl="https://www.ibm.com/topics/random-forest#:~:text=Random%20forest%20is%20a%20commonly,both%20classification%20and%20regression%20problems."
            exampleUrl="https://builtin.com/data-science/random-forest-algorithm"
          />
          <Card 
            title="DBSCAN" 
            description="Density-based spatial clustering of applications with noise (DBSCAN) is a data clustering algorithm proposed in 1996." 
            imageSrc={Expt3Image}
            descriptionUrl="your_description_url_here"
            exampleUrl="your_example_url_here"
          />
          <Card 
            title="K Nearest Neighbors" 
            description="The k-nearest neighbors (KNN) algorithm uses proximity to make predictions about the grouping of an individual data point" 
            imageSrc={Expt4Image}
            descriptionUrl="https://www.ibm.com/topics/knn#:~:text=The%20k%2Dnearest%20neighbors%20(KNN)%20algorithm%20is%20a%20non,of%20an%20individual%20data%20point."
            exampleUrl="https://www.javatpoint.com/k-nearest-neighbor-algorithm-for-machine-learning"
          />
          <Card 
            title="Linear Regression" 
            description="Linear regression analysis is used to predict the value of a variable based on the value of another variable" 
            imageSrc={Expt5Image}
            descriptionUrl="https://www.geeksforgeeks.org/dbscan-clustering-in-ml-density-based-clustering/"
            exampleUrl="https://scikit-learn.org/stable/auto_examples/cluster/plot_dbscan.html"
          />
          <Card 
            title="BackPropogation Algorithm" 
            description="In machine learning, backpropagation is a gradient estimation method used to train neural network models." 
            imageSrc={Expt6Image}
            descriptionUrl="https://www.techtarget.com/searchenterpriseai/definition/backpropagation-algorithm"
            exampleUrl="https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/"
          />
          <Card 
            title="CNN" 
            description="A Convolutional Neural Network (CNN) is a type of Deep Learning neural network architecture commonly used in Computer Vision." 
            imageSrc={Expt7Image}
            descriptionUrl="https://towardsdatascience.com/convolutional-neural-networks-explained-9cc5188c4939"
            exampleUrl="https://www.simplilearn.com/tutorials/deep-learning-tutorial/convolutional-neural-network"
          />
          <Card 
            title="Naive Bayes" 
            description="Naïve Bayes is part of a family of generative learning algorithms, meaning that it seeks to model the distribution of inputs of a given class or category." 
            imageSrc={Expt8Image}
            descriptionUrl="https://www.turing.com/kb/an-introduction-to-naive-bayes-algorithm-for-beginners"
            exampleUrl="https://www.kdnuggets.com/2020/06/naive-bayes-algorithm-everything.html"
          />
          <Card 
            title="Automated Vehicles" 
            description="A vehicle that is fully automated will be capable of controlling all aspects of driving without human intervention." 
            imageSrc={Expt9Image}
            descriptionUrl="https://mindy-support.com/news-post/how-machine-learning-in-automotive-makes-self-driving-cars-a-reality/"
            exampleUrl="https://www.trendhunter.com/slideshow/autonomous-vehicles"
          />
          {/* <Card 
            title="Optical Character Recognition" 
            description="This is the description for Random Forest." 
            imageSrc={Expt2Image}
            descriptionUrl="your_description_url_here"
            exampleUrl="your_example_url_here"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Expt;
