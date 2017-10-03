import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';



@Component({
  tag: 'my-legend',
  styleUrl: 'my-legend.scss'
})
export class MyLegend {

  // Array of legends
  public lists : Array<any> = [
    {  name: 'John Resig',
       description: 'John Resig is an American software engineer and entrepreneur, best known as the creator and lead developer of the jQuery JavaScript library',
       imageUrl: '/assets/images/john-resig.jpg'
    },

    {
      name : 'Christian Nwamba',
      description : 'JavaScript preacher. Building the web with the community. @ngnigeria organizer. #Webpack Ambassador. Advocacy for The Next Billion Users.',
      imageUrl: '/assets/images/chris.jpg'
    },

    {
       name: 'Evan you',
       description : 'Design, code & things in between. Living the dream working on @vuejs. Previously @meteorjs & @google, @parsonsamt alumnus.',
       imageUrl: '/assets/images/evans.jpeg'
    },

    {
       name : 'Otemuyiwa Prosper',
       description : 'Prosper is a full stack software engineer and writer who’s worked on biometric, health, financial and developer tools. He currently works with Auth0 as a Technical Writer.',
       imageUrl: '/assets/images/prosper.jpg'
    },

    {
       name : 'Wes Bos',
       description : 'Wes Bos, a full stack web developer and designer from Hamilton, Canada. He loves to share what he knows through training products and teaching ',
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
          <p> JavaScript Legends</p>
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
