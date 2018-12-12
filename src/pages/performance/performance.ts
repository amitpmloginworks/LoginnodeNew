import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the PerformancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-performance',
  templateUrl: 'performance.html',
})
export class PerformancePage {
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('lineCanvas1') lineCanvas1;
  @ViewChild('lineCanvas2') lineCanvas2;
  lineChart: any;
  lineChart1: any;
  lineChart2: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  //  console.log('ionViewDidLoad PerformancePage');
  //   this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
  //     type: 'line',
  //     data: {
  //         labels: ["January", "February", "March", "April", "May", "June", "July"],
  //         datasets: [
  //             {
              
  //                // label: "My First dataset",
  //                 fill: false,
  //                 lineTension: 0.1,
  //                 backgroundColor: "rgba(235, 122, 0, 0.4)", //background fill color
  //                 borderColor: "rgba(136, 183, 239, 1)",//line color
  //                 borderCapStyle: 'butt',
  //                 borderDash: [],
  //                 borderDashOffset: 0.0,
  //                 borderJoinStyle: 'miter',
  //                 pointBorderColor: "rgba(75,192,192,1)",
  //                 pointBackgroundColor: "rgba(75,192,192,1)",
  //                 pointBorderWidth: 1,
  //                 pointHoverRadius: 5,
  //                 pointHoverBackgroundColor: "rgba(136, 183, 239, 1)",
  //                 pointHoverBorderColor: "rgba(136, 183, 239, 1)",
  //                 pointHoverBorderWidth: 2,
  //                 pointRadius: 1,
  //                 pointHitRadius: 10,
  //                 data: [0, 100, 120, 70, 110, 50, 40],
  //                 spanGaps: false,
  //                 options:{ 
  //                   tooltips: {
  //                     mode: 'label'
  //                 },
  //                 scales: {
  //                   xAxes: [{
  //                       ticks:{
  //                           stepSize : 30,
          
  //                       },
  //                       stacked: true,
  //                     gridLines: {
  //                             lineWidth: 0,
  //                             color: "rgba(255,0,0,0)"
  //                         }
  //                   }],
  //                   yAxes: [{
          
  //                       stacked: true,
  //                        ticks: {
  //                           min: 0,
  //                           stepSize: 1,
  //                       }
          
  //                   }]
  //               },responsive:true, labels:false}
  //             },
  //             {
  //               // label: "My First dataset",
  //                fill: true,
  //                lineTension: 0.1,
  //                backgroundColor: "rgba(232, 237, 240, 1)",
  //                borderColor: "rgba(220, 220, 220, 1)",
  //                borderCapStyle: 'butt',
  //                borderDash: [],
  //                borderDashOffset: 0.0,
  //                borderJoinStyle: 'miter',
  //                pointBorderColor: "rgba(232, 237, 240, 1)",
  //                pointBackgroundColor: "rgba(232, 237, 240, 1)",
  //                pointBorderWidth: 1,
  //                pointHoverRadius: 5,
  //                pointHoverBackgroundColor: "rgba(232, 237, 240, 1)",
  //                pointHoverBorderColor: "rgba(232, 237, 240, 1)",
  //                pointHoverBorderWidth: 2,
  //                pointRadius: 1,
  //                pointHitRadius: 10,
  //                data: [15, 40, 60, 20, 6, 50, 30],
  //                spanGaps: false,
  //            }
  //         ]
          
  //     }
      

  // });


  this.lineChart = new Chart(this.lineCanvas.nativeElement, {
  type: 'line',
  
  data: {
    //labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: '',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(234, 241, 245, 1)",
      
    }, {
      label: '',
      data: [2, 29, 5, 5, 15, 20, 10],
      backgroundColor: "rgba(232, 237, 240, 1)"
    }],
    
  }
  });


  this.lineChart1 = new Chart(this.lineCanvas1.nativeElement, {
    type: 'line',
    
    data: {
      //labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [{
        label: '',
        data: [12, 19, 3, 17, 6, 3, 7],
        backgroundColor: "rgba(234, 241, 245, 1)",
        
      }, {
        label: '',
        data: [2, 29, 5, 5, 15, 20, 10],
        backgroundColor: "rgba(232, 237, 240, 1)"
      }],
      
    }
    });



  this.lineChart2 = new Chart(this.lineCanvas2.nativeElement, {
    type: 'line',
    
    data: {
      //labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [{
        label: '',
        data: [12, 19, 3, 17, 6, 3, 7],
        backgroundColor: "rgba(234, 241, 245, 1)",
        
      }, {
        label: '',
        data: [2, 29, 5, 5, 15, 20, 10],
        backgroundColor: "rgba(232, 237, 240, 1)"
      }],
      
    }
    });


}


  
}
