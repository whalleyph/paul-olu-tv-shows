//This set of components demonstrates prop-types and eslint support around props

//You can delete the contents of the components/demo folder
//whenever you feel you do not need it as a reference.
import { Team } from "./Team";

export function DemonstratingProps() {
    return (
        <div className="demonstratingProps">
            <h2>Demonstrating props</h2>
            <p>You can delete this set of components.</p>
            <Team title="blue team" scores={[10, 20]} />
            <Team title="red team" scores={[99, -20]} subtitle="hosts" />
        </div>
    );
}
