import { Component, Input, OnChanges, OnInit, SimpleChanges, ElementRef   } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import * as jQuery from 'jquery';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  selector: 'cw-item-preview',
  templateUrl: 'item-preview.component.html',
  styleUrls: ['item-preview.component.scss']
})
export class ItemPreviewComponent{ 
  
    @Input()
    private data: any;
  
    @Input()
    private selectedCat:number;
  
    private shrinked:boolean = false;
  
    constructor(private router: Router,private route: ActivatedRoute, private el:ElementRef) { }
  
    ngAfterViewInit(){
         this.renderView(); 
    }
  
    ngOnChanges(changes: SimpleChanges){
         if (changes['selectedCat']) {
            this.renderView(); 
         }
    }
  
    renderView(){
         if(this.selectedCat == this.data.catId || this.selectedCat == 0){
            this.fadeIn();
         }else{
            this.fadeOut();
         }
    }
  
    public fadeOut():void{
        console.log(jQuery(this.el.nativeElement));
         jQuery(this.el.nativeElement).fadeOut();
    }
  
    public fadeIn():void{
         jQuery(this.el.nativeElement).fadeIn();
    }
    
    public nevigateToIntegrationDetail(path:string,id:number):boolean{
      this.router.navigate([path, id]);
      return false;  
    }
}
