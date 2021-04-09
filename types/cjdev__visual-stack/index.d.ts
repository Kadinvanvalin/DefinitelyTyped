// Type definitions for @cjdev/visual-stack 7.1
// Project: https://github.com/cjdev/visual-stack (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Kadin Van Valin <https://github.com/Kadinvanvalin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export * from "./lib/components/Table/DataTable";
export * from "./lib/components/Table";
export * from "./lib/components/Pagination";
export * from './lib/components/Alert';
export * from './lib/components/Button';
export * from './lib/components/Badge';
export * from './lib/components/Table/DataTable';

export * from './lib/components/Spinner';
// modules that need scoping. i.e. the components they
// export need to be scoped to VisualStack.<module>.<component>
import * as BlankSlate from './lib/components/BlankSlate';
import * as Form from './lib/components/Form';
import * as List from './lib/components/List';
import * as Modal from './lib/components/Modal';
import * as PageHeader from './lib/components/PageHeader';
import * as Panel from './lib/components/Panel';
import * as SideNav from './lib/components/SideNav';

export { BlankSlate, Form, List, Modal, PageHeader, Panel, SideNav };
