import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';



@Component({
  tag: 'my-legend',
  styleUrl: 'my-legend.scss'
})
export class MyLegend {

  // Array of legends
  public lists : Array<any> = [
    {  name: 'John Resig',
       description: 'A tree of custom objects representing a part of the DOM which can be acted upon quicker than manipulating the DOM itself',
       imageUrl: '/assets/images/john-resig.jpg'
    },

    {
      name : 'Christian Nwamba',
      description : 'A superset of JavaScript providing strong typing and class based programming constructs',
      imageUrl: '/assets/images/chris.jpg'
    },

    {
       name: 'Evan you',
       description : 'Allows parts of a component state to be rendered asynchronously (I.e. via XHR)',
       imageUrl: '/assets/images/evans.jpeg'
    },

    {
       name : 'Otemuyiwa Prosper',
       description : 'Allows data binding to be implemented through binding a state variable to an onChange event which allows the state to be changed as the input value changes',
       imageUrl: '/assets/images/prosper.jpg'
    },

    {
       name : 'Wes Bos',
       description : 'JavaScriptXML allows DOM nodes to be built with HTML-like syntax',
       imageUrl: '/assets/images/wes bos.jpg'
    }
 ];

 /**
  * @type String
  */
  @Prop() name: string;

  /**
   * @type boolean
   */
  @State() toggle: boolean = false

  /**
   * @type EventEmitter
   */
  @Event() onToggle : EventEmitter;

  toggleComponent() : void {
    this.toggle = !this.toggle;

    this.onToggle.emit({ visible: this.toggle })
  }

  render() {
    return (
      <div id="wrapper">
        <div id="holder">
          <p> JavaScript Legend</p>
          <button onClick={() => this. toggleComponent()}>Toggle List</button>
        </div>

	     <div class={ this.toggle ? 'active' : 'inactive' }>

	        {this.lists.map(list =>
            <div class="card">
            <h3>{list.name}</h3>
            <p>{list.description}</p>
            <img src={list.imageUrl} alt="Random Avatar"/>
            </div>
          )}
	     </div>

      </div>
    );
  }
}
