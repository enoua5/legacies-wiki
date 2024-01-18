import Callout from './_components/Callout/Callout'
import styles from './page.module.css'

export default function Home() {
    return (
        <>
        <h1>Legacies Wiki</h1>

        <h2>Life</h2>
        <h3>Sentient Life</h3>
        <ul>
            <li><a href="bee">Bee</a></li>
            <li><a>Binicorn</a></li>
            <li><a>Treeent</a></li>
            <li><a>Lizardman</a></li>
            <li><a>Mothman</a></li>
            <li><a>Noface</a></li>
            <li><a>Humanoid</a></li>
            <li><a>Scottish Ogre</a></li>
            <li><a>Vegemite</a></li>
        </ul>
        <h3>Gods</h3>
        <ul>
            <li><a>Denos</a></li>
            <li><a>Dilfdon</a></li>
            <li><a>Grogdor</a></li>
            <li><a>Randle</a></li>
            <li><a>Trixi</a></li>
            <li><a>Zola</a></li>
        </ul>
        <h3>Legendary Life</h3>
        <ul>
            <li><a>The Great Duck</a></li>
            <li><a>Hubert</a></li>
        </ul>
        <h3>Non-Sentient Life</h3>
        <ul>
            <li><a>Antlered Cow</a></li>
            <li><a>Carnivorous Chipmunk</a></li>
            <li><a>Deer Fox</a></li>
            <li><a>Dongler</a></li>
            <li><a>Drop Bear</a></li>
            <li><a>Fire Rabit</a></li>
            <li><a>Murderous Magpie</a></li>
            <li><a>Platypus Bear</a></li>
            <li><a>Primordial Spider</a></li>
            <li><a>Scorpion Duck</a></li>
            <li><a>Sea Monster</a></li>
        </ul>

        <h2>Cities</h2>
        <ul>
            <li><a href="bee-city">Bee city (name tbd)</a></li>
            <li><a>Dave</a></li>
            <li><a>Humanoid city (name tbd)</a></li>
            <li><a>Oasis city (name tbd)</a></li>
        </ul>

        <h2>Locales</h2>
        <table>
            <tbody>
                <tr>
                    <th>Locations by region</th>
                    <th>West</th>
                    <th>Central</th>
                    <th>East</th>
                </tr>
                <tr>
                    <th>North</th>
                    <td>
                        {/* North West */}
                        <ul>
                            <li><a>The Divine Mirror</a></li>
                            <li><a>Hubert Island</a></li>
                            <li><a>The Volcano</a></li>
                        </ul>
                    </td>
                    <td>
                        {/* North */}
                        <ul>
                            <li><a>Northern River</a></li>
                            <li><a>Northern Woods</a></li>
                        </ul>
                    </td>
                    <td>
                        {/* North East */}
                        <ul>
                            <li><a>Amethyst Mountains</a></li>
                            <li><a>Dave</a></li>
                            <li><a>The Tundra</a></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>Central</th>
                    <td>
                        {/* West */}
                        <ul>
                            <li><a>Scortched Island</a></li>
                            <li><a>West Woods</a></li>
                        </ul>
                    </td>
                    <td>
                        {/* Central */}
                        <ul>

                            <li><a>The Desert</a></li>
                            <li><a>The Oasis</a></li>
                        </ul>
                    </td>
                    <td>
                        {/* East */}
                        <ul>
                            <li><a>Giant Stone Structure</a></li>
                            <li><a>The Swamp</a></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>South</th>
                    <td>
                        {/* South West */}
                        <ul>
                            <li><a>The Grasslands</a></li>
                            <li><a>The South Beach</a></li>
                            <li><a>The Western River</a></li>
                        </ul>
                    </td>
                    <td>
                        {/* South */}
                        <ul>
                            <li><a>The Meadow</a></li>

                        </ul>
                    </td>
                    <td>
                        {/* South East */}
                        <ul>
                            <li><a href="australia">Australia</a></li>
                            <li><a>The Grandé Chasm</a></li>
                            <li><a>The Eastern River</a></li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
        
        <h2>Other Important Things</h2>
        <ul>
            <li><a href="nine-commandments">The Nine Commandments</a></li>
            <li><a href="comet-of-change">The Comet of Change</a></li>
            <li><a>Moons</a></li>
        </ul>
        </>
    )
}
