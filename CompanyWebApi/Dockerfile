FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["CompanyWebApi.csproj", "./"]
RUN dotnet restore "CompanyWebApi.csproj" 
COPY . .
RUN dotnet publish "CompanyWebApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
RUN apt-get update && apt-get install -y
ENTRYPOINT ["dotnet", "CompanyWebApi.dll"]
