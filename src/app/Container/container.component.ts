import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterContentInit, AfterViewChecked,
OnDestroy{
    @Input() value: string = 'Angular Lifecycle'

    constructor(){
        console.log('Constructor Called!');
        //console.log(this.value);
    }
    ngOnChanges(change: SimpleChanges){
        console.log('ngOnChanges Called!');
        console.log(change);
           
    }
    ngOnInit(){
        console.log('ngOnInit Called!');
        //console.log(this.value);
    }

    ngDoCheck(){
        console.log('ngDoCheck Called!');
    }

    ngAfterContentInit(){
        console.log('ngAfterContentInit Called!');
    }

    ngAfterContentChecked(){
        console.log('ngAfterContentChecked Called!');
    }

    ngAfterViewInit(){
        console.log('ngAfterViewInit Called!');
    }

    ngAfterViewChecked(){
        console.log('ngAfterViewChecked Called!');
    }

    ngOnDestroy(){
        console.log('ngOnDestroy Called!');
    }
}