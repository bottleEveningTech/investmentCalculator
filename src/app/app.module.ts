import { NgModule } from "@angular/core";
import { App } from "./app";
import { Header } from "./header/header";
import { InvestmentResults } from "./investment-results/investment-results";
import { UserInput } from "./user-input/user-input";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
    declarations: [App, Header, InvestmentResults],
    imports: [UserInputModule, BrowserModule],
    bootstrap: [App]
})
export class AppModule{

}