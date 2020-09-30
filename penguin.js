var penguinPromise=d3.json("classData.json");

var allpenguin= function(penguin) {
var finalgrade= penguin.final.grade

var finals=penguin.map(finalgrade)

var quizgrade=penguin.quizes.grade
var quizess=penguin.map(quizgrade)}
var successFCN=function(penguin)
{console.log("Data Collection", penguin)
var finalgrade= function(penguin){
  return penguin.final[1]
}

var finals=penguin.map(finalgrade)

var quizgrade=function(penguin)
{return penguin.quizes[1]}
var quizess=penguin.map(quizgrade)}

var failFCN=function(errormessage)
{console.log("something went wrong", errormessage)}

penguinPromise.then(successFCN, failFCN)

drawPlot=function(quizess,finals, xScale, yscale)
{
  d3.select("graph")
  .selectAll("circle")
  .data(penguin)
  .enter()
  .append("circle")
  .attr("cx", function(penguin)
  {return xScale(penguin.finals)})
  .attr("cy", function(penguin)
  {return yscale(penguin.quizess)})
}
var intialgraph=function(penguins)
{ var screen= {width:600, heigh:600}
d3.select("graph")
.attr("width", screen.width)
.attr("height", screen.height)

var xscale=d3.scalelinear()
.domain([0,1])
.range([0,screen.width])

var yscale=d3.scalelinear()
.domain([0,100])
.range([screen.height,0])
}

