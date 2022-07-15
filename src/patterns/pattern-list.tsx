import React from 'react';
import './pattern-list.css';

type Pattern = {
    id: number;
    label: string;
    level: string;
    description: string;
    img: string;
}

type PatternListState = {
    patterns: Pattern[];
}

export class PatternList extends React.Component<{}, PatternListState> {
    constructor(props) {
        super(props);
        this.state = {
            patterns: [
                {
                    id: 1,
                    label: 'Heart',
                    level: 'Simple',
                    description: `"And now here is my secret, a very simple secret: 
                        It is only with the heart that one can see rightly; what is 
                        essential is invisible to the eye." 
                        ~Antoine de Saint-Exupéry, The Little Prince`,
                    img: 'heart'
                },
                {
                    id: 2,
                    label: 'Boat',
                    level: 'Simple',
                    description: `"This boat that we just built is just fine -
                        And don't try to tell us it's not
                        The sides and the back are divine -
                        It's the bottom I guess we forgot."
                        ~Shel Silverstein, Where the Sidewalk Ends`,
                    img: 'boat'
                },
                {
                    id: 3,
                    label: 'Butterfly',
                    level: 'Intermediate',
                    description: `"But on paper, things can live forever.
                        On paper, a butterfly never dies."
                        ~Jacqueline Woodson, Brown Girl Dreaming`,
                    img: 'butterfly'
                },
                {
                    id: 4,
                    label: 'Dragon',
                    level: 'Complex',
                    description: `"No dragon can resist the fascination of 
                        riddling talk and of wasting time trying to understand 
                        it." ~J.R.R. Tolkien, The Hobbit`,
                    img: 'dragon'
                },
                {
                    id: 5,
                    label: 'Flower',
                    level: 'Intermediate',
                    description: `"A flower is seen only toward the end of its life, 
                        just-bloomed and already on its way to being brown paper." 
                        ~Ocean Vuong, On Earth We're Briefly Gorgeous`,
                    img: 'flower'
                },
                {
                    id: 6,
                    label: 'Owl',
                    level: 'Simple',
                    description: `"Perhaps he does not want to be friends with you 
                        until he knows what you are like. With owls, it is never 
                        easy-come-easy-go." ~T.H. White, The Sword in the Stone`,
                    img: 'owl'
                }
            ]
        };
    }

    render() {
        const patternList = this.state.patterns.map((pattern) =>
            <div className='pattern' key={ pattern.id }>
                <div className='pattern__header'>{ pattern.label }</div>
                <div className='pattern__subheader'>{ pattern.level }</div>
                <img src={`/images/${pattern.img}.svg`} />
                <div className='pattern__description'>{ pattern.description }</div>
            </div>
        );

        return (
            <section className='container'>
                { patternList }
            </section>
        );
    }

}