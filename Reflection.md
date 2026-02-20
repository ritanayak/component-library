1- How did you handle optional props in your components?

I handled optional props by defining them explicitly in the TypeScript interfaces using the ? operator, such as onClose?, showEmail?, and children?. In the component implementations, I used conditional rendering to ensure these props were only executed or displayed when provided. For example, the close button in AlertBox renders only if onClose exists, and the edit button in UserProfileCard renders only if onEdit is passed.

Additionally, I used default parameter values for some optional boolean props like showDescription = false and showStockStatus = false to prevent undefined behavior. This approach keeps components predictable, safe, and reusable while maintaining clean logic.

2- What considerations did you make when designing the component interfaces?

When designing the interfaces, I focused on reusability, separation of concerns, and extensibility. I separated entity models such as User and Product from the component props, added optional boolean flags to control display sections, and included children to allow flexible composition. This made the components adaptable to different contexts while keeping them maintainable and easy to extend in the future.

3- How did you ensure type safety across your components?

Type safety was ensured through strict TypeScript interfaces, union types for controlled values like AlertType, and properly typed callback functions such as onAddToCart and onEdit. I avoided using any and leveraged TypeScript to catch errors at compile time. Additionally, I used Record for mapping alert types to styles and functional updates for state to prevent potential runtime issues.

4- What challenges did you face when implementing component composition?

A main challenge was designing components that are both independent and composable without being tightly coupled. I needed to decide when to use children versus dedicated props and how to manage shared state, like alerts or cart items, at the parent level. Careful prop typing, conditional rendering, and clear separation between UI structure and business logic helped overcome these challenges and enabled smooth component integration.
